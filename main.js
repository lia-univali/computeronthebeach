var navOffsetTop
$(document).ready(function() {
    navOffsetTop = $('nav').offset().top
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    $(window).on('scroll', onScroll)
})
function onScroll() {
    if (navOffsetTop < $(window).scrollTop() && !$('nav').hasClass('is-fixed-top')) {
        $('nav').addClass('is-fixed-top')
        $('body').css("padding-top", $('nav').height())
    }
    if (navOffsetTop > $(window).scrollTop() && $('nav').hasClass('is-fixed-top')) {
        $('nav').removeClass('is-fixed-top')
        $('body').css("padding-top", 0)
    }
}

$(window).on('scroll', function () {
    var pixs = $(document).scrollTop()
    var scr = pixs/2
    pixs = 1- pixs / $('.hero-body').height()/7;
    $(".hero-body").css({"opacity": pixs })
    $("#hero-title").css({"transform": 'translateY('+scr+'px)'})
});

