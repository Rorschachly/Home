/*
    Jialiang Liu
    CSE 154 AN
    TA: Joshua Crowgey
    Assignment: Creative SQL
    File: whatfriendswannado.js

    This is the javascript file that set an onclick value to the submit button.
    Get the user input and displays the person wanna_do_list below the button.
*/

(function() {
    'use strict';

    function $(id) {
        return document.getElementById(id);
    }

    window.onload = function() {
        $("submit").onclick = submit;
        t=setTimeout("alert('虽然这个网站很假，但是大家衷心祝你考一个满意的成绩!')", 30000);
    };

    function submit() {
        if ($("name").value == "阎博文") {
            $("output").innerHTML = "该考生总成绩为250，具体成绩请前往办公厅官网查询";
        } else if ($("name").value == "赵蔚然") {
            $("output").innerHTML = "该考生总成绩为负29分，具体成绩请前往办公厅官网查询";
        } else if ($("name").value == "赵紫皙") {
            $("output").innerHTML = "赵紫皙的总成绩为598分，具体成绩请前往办公厅官网查询";
        } else if ($("name").value == "李嘉怿") {
            $("output").innerHTML = "该考生总成绩为十万伏特分，具体成绩请前往办公厅官网查询";
        } else if ($("name").value == "李壮") {
            $("output").innerHTML = "该考生总成绩为666分，具体成绩请前往办公厅官网查询";
        } else if ($("name").value == "王梓锟") {
            $("output").innerHTML = "这学生大狗，我们查不了";
        } else if ($("name").value == "王子奇") {
            $("output").innerHTML = "？？？考你麻痹？？？这学生是煞笔！"
        } else {
            $("output").innerHTML = "因为技术故障，该考生成绩暂时无法从省厅SQL数据库调入";
        }
    }
})();
