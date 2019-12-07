$('div.bgParallax').each(function(){
let $objeto = $(this);

    $(window).scroll(function() {
    let pos = -($(window).scrollTop() / $objeto.data('speed')); 
    let backgpos = '50% '+ pos + 'px';

    $objeto.css('background-position', backgpos );
    }); 
});

//descobrir se serve section no lugar da div 