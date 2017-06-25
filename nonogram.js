
(function() {
    "use strict";
    
    var $ = function(id) {
        return document.getElementById(id);
    };
    
    var qsa = function(sel) {
        return document.querySelectorAll(sel);
    };
    
    window.onload = function() {
        var grids = qsa(".box");
        for (var i = 0; i < grids.length; i++) {
            grids[i].onclick = turnOver;
        }
        $("clear").onclick = clear;
        
        function clear() {
            var r = confirm("You sure?");
            var grids = qsa(".box");
            if (r) {
                for (var i = 0; i < grids.length; i++) {
                    grids[i].classList.remove("filled");
                } 
            }
        }
        
        function turnOver() {
            var theName = this.classList;
            if (theName.contains("filled")) {
                theName.remove("filled");
            } else {
                theName.add("filled");
            } 
        }
    };
})();