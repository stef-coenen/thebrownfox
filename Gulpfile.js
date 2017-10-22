const gulp = require('gulp');
const $ = require('gulp-load-plugins')(); // Gulp plugin loader (loads all gulp-* dependencies)
const sass = require('gulp-sass'); // Sass compiler
const autoprefixer = require('gulp-autoprefixer'); // Fixed vendor prefixes by required prefixes for configured compatibility
const sourcemaps = require('gulp-sourcemaps'); // Adds sourcemaps to your resulting css file
const babel = require('gulp-babel'); // ES6 Transpilation
const uglify = require('gulp-uglify'); // JS Minification
const concat = require('gulp-concat'); // JS Concatenation
const cleanCSS = require('gulp-clean-css'); // CSS Minification
const nunjucksRender = require('gulp-nunjucks-render'); // Nunjucks renderer
const wbBuild = require('workbox-build'); // Generates ServiceWorker on static assets
const express = require('express'); // Webserver
const path = require('path'); // NPM path helper

const DEV_DIR = '';
const DESIGN_DIR = path.join(DEV_DIR, 'design');
const DIST_DIR = 'docs';

function runExpress(port, rootDir) {
    var app = express();

    app.use(express.static(rootDir));
    app.set('views', path.join(rootDir, 'views'));
    app.set('view engine', 'jade');

    app.get('/dynamic/:page', function (req, res) {
        res.render(req.params.page);
    });

    var server = app.listen(port, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server running at http://%s:%s', host, port);
    });
}

gulp.task('copy-dependencies', function () {
    gulp.src(['./node_modules/jquery/dist/jquery.js'])
        .pipe(gulp.dest(path.join(DESIGN_DIR, 'js/lib/jquery')));

    gulp.src(['./node_modules/bootstrap/js/dist/util.js',
        './node_modules/bootstrap/js/dist/collapse.js'
    ])
        .pipe(gulp.dest(path.join(DESIGN_DIR, 'js/lib/bootstrap')))

    gulp.src(['./node_modules/bootstrap/scss/**/_*.scss'])
        .pipe(gulp.dest(path.join(DESIGN_DIR, 'scss/vendor/bootstrap')));
});

gulp.task('stylesheets', function () {
    gulp.src(path.join(DESIGN_DIR, 'scss/**/*.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 8', 'ios >= 8'],
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(sourcemaps.write({
            sourceRoot: './design/scss/'
        }))
        .pipe(gulp.dest(path.join(DIST_DIR, 'design/css/')));
});

gulp.task('javascript', function () {
    gulp.src([
        path.join(DESIGN_DIR, 'js/lib/jquery/*.js'),
        path.join(DESIGN_DIR, 'js/lib/bootstrap/**/*.js')
    ])
        .pipe(concat('lib.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(path.join(DIST_DIR, 'design/js/')));

    gulp.src([
        path.join(DESIGN_DIR, 'js/app/components/*.js'),
        path.join(DESIGN_DIR, 'js/app/functions/*.js'),
        path.join(DESIGN_DIR, 'js/app/modules/*.js'),
        path.join(DESIGN_DIR, 'js/app/lube.strapon.js')
    ])
        .pipe(concat('applib.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest(path.join(DIST_DIR, 'design/js/')));
});

gulp.task('copy-img', function () {
    gulp.src(path.join(DESIGN_DIR, 'img/**/*'))
        .pipe(gulp.dest(path.join(DIST_DIR, 'design/img')));
});

gulp.task('copy-icons', function () {
    gulp.src(path.join(DESIGN_DIR, 'favicons/**/*'))
        .pipe(gulp.dest(path.join(DIST_DIR, 'design/favicons')));
});

gulp.task('copy-fonts', function () {
    gulp.src(path.join(DESIGN_DIR, 'fonts/**/*'))
        .pipe(gulp.dest(path.join(DIST_DIR, 'design/fonts')));
});

gulp.task('compile-nunjucks', function () {
    // Gets .html and .nunjucks files in pages
    gulp.src(path.join(DEV_DIR, 'pages/**/*.+(html|nunjucks)'))
        // Renders template with nunjucks
        .pipe(nunjucksRender({
            path: ['app/templates']
        }))
        // output files in app folder
        .pipe(gulp.dest(DIST_DIR))
});

gulp.task('bundle-sw', () => {
    return wbBuild.generateSW({
        globDirectory: './' + DIST_DIR + '/',
        swDest: path.join(DIST_DIR, 'sw.js'),
        globPatterns: ['**\/*.{html,js,css,svg,png,jpg}'],
        globIgnores: [],
        templatedUrls: {},
    })
        .then(() => {
            console.log('Service worker generated.');
        })
        .catch((err) => {
            console.log('[ERROR] This happened: ' + err);
        });
})

// gulp.task('serve-dev', ['generate-service-worker-dev'], function () {
//     runExpress(3001, DEV_DIR);
// });

gulp.task('serve-dist', [], function () {
    runExpress(3000, DIST_DIR);
});

gulp.on('err', function (err) {
    console.log(err);
});

//Watch task
gulp.task('default', ['serve-dist'], function () {
    gulp.watch(path.join(DESIGN_DIR, 'scss/**/*.scss'), ['stylesheets']);
    gulp.watch(path.join(DESIGN_DIR, 'js/**/*.js'), ['javascript']);
    gulp.watch(path.join(DEV_DIR, '**/*.+(html|nunjucks)'), ['compile-nunjucks']);

    gulp.watch(path.join(DESIGN_DIR, 'img/**/*'), ['copy-img']);
    gulp.watch(path.join(DESIGN_DIR, 'favicons/**/*'), ['copy-icons']);
    gulp.watch(path.join(DESIGN_DIR, 'fonts/**/*'), ['copy-fonts']);
});
