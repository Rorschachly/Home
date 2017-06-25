/* J
ialiang Liu
4 May 2017
CSE 154 AN
TA: Joshua Crowgey
Creative
File:star_war_char_generator.js

This is the javascript file for the star_war_char_generator.html
THis week I used Ajax in my page.
So when the user clicks on the button, it will randomly pick a star war
character from the swapi.co to display. And keep click on the hairbutton,
it will display the character's hair color.

*/
(function() {
    'use strict';

    function $(id) {
        return document.getElementById(id);
    }

    window.onload = function () {
        $("show-button").onclick = function() {
            $("container").innerHTML = "";
            //There is currently 87 characters in the book
            var randomNum = Math.floor(Math.random() * 87 + 1);
            var ajaxGetPromise =
                new AjaxGetPromise("http://swapi.co/api/people/" + randomNum);
            ajaxGetPromise
                .then(JSON.parse)
                .then( function(obj) {
                    var show = document.createElement("p");
                    show.id = "show";
                    show.innerHTML = obj.name;
                    $("container").appendChild(show);
                    var showHair = document.createElement("button");
                    showHair.id = "hairbutton";
                    showHair.innerHTML = "Hair Color";
                    $("container").appendChild(showHair);
                    showHair.onclick = function() {
                        if ($("hair-color")) {
                            $("container").removeChild($("hair-color"));
                        }
                        var hairColor = document.createElement("p");
                        hairColor.id = "hair-color";
                        if (obj.hair_color == "none") {
                            hairColor.innerHTML = "Oops, maybe this character is bald!";
                        } else {
                            hairColor.innerHTML = obj.hair_color;
                        }
                        $("container").appendChild(hairColor);
                    };
                })
                .catch( function() {
                    var error = document.createElement("p");
                    error.id = "error";
                    error.innerHTML = "Sorry, the character escaped.";
                    $("container").appendChild(error);
                });
        };
    };
})();
