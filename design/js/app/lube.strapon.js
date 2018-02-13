/**
* [window.Lube]
*
* @author       [Stef Coenen]
* @date         [2017]
* @namespace    [Lube]
* @requires     [jQuery]
* @revision     [0.1]
*/

window.Lube = (function($, ns) {
    // 1. ECMA-262/5
    'use strict';

    // 2. PRIVATE CONFIGURATION OVERRIDE
    var cfg = {};

    // 3. LOAD COMPONENT, CLASSES AND DATACOMPONENTS
    ns.components = function() {
        ns.Dom.init();
        ns.Animation.init();
    };

    ns.modules = function() {
        return {
            //toggle: new ns.Toggle(),
            googlemaps: new ns.Googlemaps()
        };
    };

    ns.dataComponentInitializer = function() {
        var dataComponents = $('[data-component]');
        for (var i = 0; i < dataComponents.length; i++) {
            var dataComponent = dataComponents.eq(i);
            var dataAttr = dataComponent.data('component');
            dataAttr = dataAttr.split('.');

            if (dataAttr.length >= 2) {
                var componentFunction = ns[dataAttr[1]];
                if (componentFunction) {
                    new componentFunction(dataComponent);
                }
            }
        }
    };

    // 5. ONCE THE DOM IS READY
    $(function() {
        ns.components();
        ns.modules();
        ns.dataComponentInitializer();
    });

    // 6. Trigger along load event
    $(window).on('load', function() {
        $.ready.then(function() {
            $(ns).trigger('load');
        });
    });

    // 7. Register SW
    if ('serviceWorker' in navigator) {
        // Register a service worker hosted at the root of the
        // site using the default scope.
        navigator.serviceWorker
            .register('/sw.js')
            .then(function(registration) {
                console.info('Service worker registration succeeded:', registration);
                registration.update();
            })
            .catch(function(error) {
                console.info('Service worker registration failed:', error);
            });
    } else {
        console.info('Service workers are not supported.');
    }

    // 8. GLOBALIZE NAMESPACE
    return ns;
})(window.jQuery, window.Lube || {});
