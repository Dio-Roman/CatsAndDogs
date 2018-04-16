"use strict";

const inputSubs = document.querySelector("#sub");

inputSubs.onmouseover = function () {
    document.querySelector('#subscribe').style.display = "block";
    document.querySelector('#subSpan').style.display = "none"
}

inputSubs.onmouseout = function () {
    document.querySelector('#subscribe').style.display = "none";
    document.querySelector('#subSpan').style.display = "block"
}