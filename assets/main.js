
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function () {
    $(".menu-container").click(function () {
        $(".navigate").slideToggle();
    });

    $(window).on('resize' , function () {
       if(!$(".menu-container").is(":visible") && !$(".navigate").is(':visible')){
           $(".navigate").show();
       }
    });
});