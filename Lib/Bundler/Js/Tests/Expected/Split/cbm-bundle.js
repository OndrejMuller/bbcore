var __bbb={};!function() {
    "use strict";
    (function(e, n) {
        var o = __bbb[n];
        return void 0 !== o ? o instanceof Promise ? o : Promise.resolve(o) : __bbb[n] = new Promise(function(o, t) {
            var i = document.createElement("script");
            i.type = "text/javascript", i.charset = "utf-8", i.onload = function() {
                o(__bbb[n]);
            }, i.onerror = function(n) {
                t("Failed to load " + e);
            }, i.src = e, document.head.appendChild(i);
        });
    })("lib.js", "a").then(function(e) {
        console.log(e.hello());
    });
}();