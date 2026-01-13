$(document).ready(function () {
    $("#buttonbir").click(function () {
        $("#toggle-h2").toggle(2000, function () {
            if ($("#buttonbir").text() == "Hide") {
                $("#buttonbir").text("Show");
            } else {
                $("#buttonbir").text("Hide");
            }
        });
    });
    
    $("#buttoniki").click(function () {
        $("#fader-h2").fadeToggle(2000, function () {
            if ($("#buttoniki").text() == "FADE OUT") {
                $("#buttoniki").text("FADE IN");
            } else {
                $("#buttoniki").text("FADE OUT");
            }
        });
    });
$("#buttonuc").click(function () {
        $("#fadeto-h2").fadeTo(2000, 0.25, function () {
            if ($("#buttonuc").text() == "FADE TO 25%") {
                $("#buttonuc").text("FADE İN");
            } else {
                $("#buttonuc").text("FADE TO 25%");
            }
        });
    });

$("#buttondord").click(function () {
        $("#slide-h2").slideToggle(2000, function () {
            if ($("#buttondord").text() == "SLIDE DOWN") {
                $("#buttondord").text("SLIDE UP");
            } else {
                $("#buttondord").text("SLIDE DOWN");
            }
        });
    });

});