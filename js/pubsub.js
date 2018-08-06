(function(window) {
    'use strict';

    var subcribers = {};

    function subscribe(subscribersName, fn) {
        subscribers[subscribersName] = subscribers[subscribersName] || [];
        subscribers[subscribersName].push(fn);
    }

    function unSubscribe(subscribersName, fn) {
        if (subscribers[subscribersName]) {
            for (var i = 0; i < subscribers[subscribersName].length; i++) {
                if (subscribers[subscribersName][i] === fn) {
                    subscribers[subscribersName].splice(i, 1);
                    break;
                }
            }
        }
    }

    function publish(subscribersName, data) {
        if (subscribers[subscribersName]) {
            subscribers[subscribersName].forEach(function(fn) {
                fn(data);
            });
        }
    }

    var PubSub = {
        subscirbe: subscribe,
        unSubscribe: unSubscribe,
        publish: publish
    };

    window.PubSub = PubSub;
})(window);