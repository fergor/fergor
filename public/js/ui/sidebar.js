$(".showmenu").click(function() {
    if ($("#menu").hasClass("onscreen")) {
    $("#menu").removeClass("onscreen");
        $(".showmenu").removeClass("closemenu");
        $("#menu-footer").css("bottom",-50);
    $("#formore").fadeIn(600);
    }
    else {
        $("#menu").addClass("onscreen");
        $(".showmenu").addClass("closemenu");
        $("#menu-footer").css("bottom", 0);
        $("#formore").fadeOut(200);
    }
});

$(".cat").click(function() {
    $(".active").removeClass("active");
    $(this).addClass("active");
});

function position() {
    $('.section').height($(window).height())
    $("#menu").height($(window).height());
    $("#cats").css("margin-top", $(window).height() / 3.5);
}

$(window).resize(position);
$(window).ready(position);

