"use strict";

$ (document).ready (function () {
    $ (".photo").on ("click", function () {
        $ (this).clone().appendTo(".container").addClass("new-pic");

        $ (".new-pic").css ({"width": "64vw", "transform": "rotate(0deg)",
                     "z-index": "999", "position": "absolute",
                    "box-shadow": "0px 1px 200px 11px black", "margin": "0 7vw",
                    "border-radius": "10%"});
        
        $ (".new-pic").click (function(){
            $ (this).remove();
        })
    })
})

