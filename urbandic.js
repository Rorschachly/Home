(function() {
    "use strict";
    window.onload = function() {
        document.getElementById("lookup").onclick = search;

        function search() {
            document.getElementById("result").innerHTML = "";
            document.getElementById("related").innerHTML = "";
            var word = document.getElementById("term").value;
            var ajaxGet = new AjaxGetPromise("https://webster.cs.washington.edu/cse154/labs/9/urban.php?term=" + word + "&all=true");
            ajaxGet
                .then(JSON.parse)
                .then( function (obj) {
                    var orderedList = document.createElement("ol");
                    orderedList.id = "ordered-list";
                    document.getElementById("result").appendChild(orderedList);
                    for (var i = 0; i < obj.entries.length; i++) {
                        var singleDef = document.createElement("li");
                        var def = document.createElement("p");
                        var eg = document.createElement("p");
                        eg.className = "example";
                        var author = document.createElement("p");
                        singleDef.appendChild(def);
                        singleDef.appendChild(eg);
                        singleDef.appendChild(author);
                        def.innerHTML = obj.entries[i].definition;
                        eg.innerHTML = obj.entries[i].example;
                        author.innerHTML = "- " + obj.entries[i].author;
                        author.id = "authorID";
                        author.className = "author";
                        author.onclick = searchForAuthor;
                        document.getElementById("ordered-list").appendChild(singleDef);
                    }
                });
                // .catch( function () {
                //     document.getElementById("result").innerHTML = "Sorry, we cannot find the word.";
                // })
        }

        function searchForAuthor() {
            var author = this.innerHTML.substring(2);
            var ajaxGetPromise = new AjaxGetPromise("https://webster.cs.washington.edu/cse154/labs/9/urban.php?author=" + author);
            ajaxGetPromise
                .then(JSON.parse)
                .then( function(obj) {
                    var heading = document.createElement("h2");
                    var contributes = document.createElement("p");
                    heading.innerHTML = "All entries by " + obj.author;
                    document.getElementById("related").appendChild(heading);
            		var words = obj.entries;
            		for (var i = 0; i < words.length; i++) {
            			if (contributes.innerHTML) {
            				contributes.innerHTML += ", ";
            			}
            			contributes.innerHTML += words[i].word;
            		}
                    document.getElementById("related").appendChild(contributes);
                });
                // .catch( function() {
                //     alert("Sorry, some problems occurred.");
                // })
        }
    };
})();
