//fadeIn fadeOut event

$(document).ready(function () {
    $(".hide").click(function(){
        $(this).parents().siblings('.text-container').animate({
            opacity: 0
        });
    })

    $(".show").click(function(){
        $(this).parents().siblings('.text-container').animate({
            opacity: 1
        });
    })
});

//Parallax

function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

$(window).scroll(function() {
    var scrolled = $(window).scrollTop()
    $('.season-container').each(function(index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()

        var visible = isInViewport(this)
        if(visible) {
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
        }
    })
})
