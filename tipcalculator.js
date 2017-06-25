(function() {
    "use strict";
    
    var $ = function(id) { 
        return document.getElementById(id); 
    };
    
    window.onload = function() {
        $("tenpercent").onclick = computeTip;
        $("fifteenpercent").onclick = computeTip;
        $("eighteenpercent").onclick = computeTip;
    };
    
    function computeTip() {
        var subtotal = parseFloat($("subtotal").value);
        var tipPercent = parseInt(this.innerHTML);
        var tipAmount = subtotal + subtotal * tipPercent / 100.0;
        $("total").innerHTML = "Total: $" + tipAmount;
    }
})();