$(function() {
    var dot = $(".dot");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            dot.removeClass('dot').addClass("active");
        } else {
            dot.removeClass("dot").addClass('active');
        }
    });
});
