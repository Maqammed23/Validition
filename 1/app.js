$(document).ready(function () {
    $("#toggle-h2").toggle(2000, function () {
        if ($("toggle-h2").text()=="Hide") {
            $("#toggle-h2").text("Show")
        } else {
            $("#toggle-h2").text("Hide")
        }
    })
})