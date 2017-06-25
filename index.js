/*
Jialiang Liu
24 April 2017
CSE 154 AN
TA: Joshua Crowgey
Creative
File:index.js

This is the javascript file for the index.html
THis week I used jQuery and Bootstrap in my page.
So I made an effect that when user clicks the logo on the top,
the contents will appear. And click again the contents will disappear.

*/

(function() {
    "use strict";

    window.onload = function() {
        var divList = document.getElementById("maincontent").children;
        for (var i = 0; i < divList.length; i++) {
            if (i % 2 == 0) {
                divList[i].style.backgroundColor = "rgb(60, 170, 220)";
            } else {
                divList[i].style.backgroundColor = "white";
            }
        }
        $("#maincontent").hide();
        document.getElementsByTagName("NAV")[0].style.visibility = "hidden";
        $("#bigheading img").click(clickOnHeading);
    };

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    // Click on the big heading logo,it will show the main contents of my page.
    // If click again, the main content will disappear.
    function clickOnHeading() {
        if (document.getElementById("maincontent").style.display == "none") {
            document.getElementsByTagName("NAV")[0].style.visibility = "visible";
            $("#maincontent").show("slow");
        } else {
            document.getElementsByTagName("NAV")[0].style.visibility = "hidden";
            $("#maincontent").hide("slow");
        }
    }

})();
