$("#learnMore").click(function(e) {
    e.preventDefault();
    $("html, body").stop().animate({
        scrollTop: $("#improvements").offset().top
    }, 2000);
});