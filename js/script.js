
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".navbar").removeClass("active");
    }
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".header-cc").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header-cc").removeClass("active");
    }
});

// $(document).ready(function () {
//     $('.scroll-graphic').scrollSwap();
//   });

$(document).ready(function () {
    $('.scroll-graphic').scrollSwap({
        triggerFromTop: 1,// 50%
    });
});

