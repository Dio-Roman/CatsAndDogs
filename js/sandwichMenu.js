"use strict";

$(".logo").click(function () {
    if($(window).width()<"702") {               
        $(".sandwich").slideToggle("slow");
    }            
}); 

