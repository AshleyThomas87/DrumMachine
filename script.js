var qDrum = document.getElementById("Q");

$("#qAudio").on("click", function(){
    qDrum.play();
    $("#display").html("Q")

});

var wDrum = document.getElementById("W");

$("#wAudio").on("click", function(){
    wDrum.play();
    $("#display").html("W")
});

var eDrum = document.getElementById("E");

$("#eAudio").on("click", function(){
    eDrum.play();
    $("#display").html("E")
});

var aDrum = document.getElementById("A");

$("#aAudio").on("click", function(){
    aDrum.play();
    $("#display").html("A")
});

var sDrum = document.getElementById("S");

$("#sAudio").on("click", function(){
    sDrum.play();
    $("#display").html("S")
});

var dDrum = document.getElementById("D");

$("#dAudio").on("click", function(){
    dDrum.play();
    $("#display").html("D")
});

var zDrum = document.getElementById("Z");

$("#zAudio").on("click", function(){
    zDrum.play();
    $("#display").html("Z")
});

var xDrum = document.getElementById("X");

$("#xAudio").on("click", function(){
    xDrum.play();
    $("#display").html("X")
});

var cDrum = document.getElementById("C");

$("#cAudio").on("click", function(){
    cDrum.play();
    $("#display").html("C")
});


$("body").keydown(function(event){
    if(event.which === 81){
        qDrum.play();
        $("#display").html("Q")
    }
    else if(event.which === 87){
        wDrum.play();
        $("#display").html("W")
    }
    else if(event.which === 69){
        eDrum.play();
        $("#display").html("E")
    }
    else if(event.which === 65){
        aDrum.play();
        $("#display").html("A")
    }
    else if(event.which === 83){
        sDrum.play();
        $("#display").html("S")
    }
    else if(event.which === 68){
        dDrum.play();
        $("#display").html("D")
    }
    else if(event.which === 90){
        zDrum.play();
        $("#display").html("Z")
    }
    else if(event.which === 88){
        xDrum.play();
        $("#display").html("X")
    }
    else if(event.which === 67){
        cDrum.play();
        $("#display").html("C")
    }

    });