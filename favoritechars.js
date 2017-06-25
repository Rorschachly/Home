
(function() {
    'use strict';
    function $(id) {
        return document.getElementById(id);
    }

    window.onload = function () {
        $("test-button").onclick = function() {
            //There is currently 87 characters in the book
            var randomNum = Math.floor(Math.random() * 87 + 1);
            var ajaxGetPromise =
                new AjaxGetPromise("http://swapi.co/api/people/" + randomNum);
            ajaxGetPromise
                .then(JSON.parse)
                .then( function(obj) {
                    $("test").innerHTML = obj.name;
                })
        };
    };
})();
