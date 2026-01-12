$(document).ready(function () {
    $("#toggle-h2").toggle(2000, function () {
        if ($("toggle").text()=="Hide") {
            $("#toggle").text("Show")
        } else {
            $("#toggle-h2").text("Hide")
        }
    })
})