
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function () {
    $(".menu-container").click(function () {
        $(".navigate").slideToggle();
    });

});