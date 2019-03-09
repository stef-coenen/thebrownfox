window.Lube = (function($, ns) {
    'use strict';

    var cfg = {
        cache: {},
        classes: {
            triggerLoadAnimation: 'init-load-animation'
        },
        events: {
            load: 'load'
        }
    };

    ns.Animation = {
        init: function() {
            this.settings = cfg;

            this.win = $(window);
            this.body = $(document.body);

            this.bindEvents();
        },

        bindEvents: function() {
            let settings = this.settings,
                events = settings.events,
                classes = settings.classes;

            $(ns).on(events.load, () => {
                this.body.addClass(classes.triggerLoadAnimation);
            });
        }
    };

    return ns;
})(window.jQuery, window.Lube || {});
