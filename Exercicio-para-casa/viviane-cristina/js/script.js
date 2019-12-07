$(document).ready(function () {

    // Ao digitar mostra fundo amarelho para localizar o campo que está
    setBackground = function(campo){
        $("#"+campo).css("background-color", "yellow");
    };

    $("#nome").keydown(function() {
        setBackground("nome");
    });

    $("#email").keydown(function() {
        setBackground("email");
    });

    $("#telefone").keydown(function() {
        setBackground("telefone");
    });

    $("#mensagem").keydown(function() {
        setBackground("mensagem");
    });

    // Ao tirar o foco volta o background para branco
    resetBackground = function(campo){
        $("#"+campo).css("background-color", "white");
    };

    $("#nome").blur(function(){
        resetBackground("nome");
    });

    $("#email").blur(function(){
        resetBackground("email");
        // $("#email").css("background-color", "white");
    });

    $("#telefone").blur(function(){
        resetBackground("telefone");
    });

    $("#mensagem").blur(function(){
        resetBackground("mensagem");
      });

    // Ao clicar no botão mostra alerta de enviado com sucesso
    $("form").submit(function () {
        alert("Formulário enviado com sucesso");
    });

    //Código do efeito Parallax
    $('div.bgParallax').each(function(){
        var $obj = $(this);
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $obj.data('speed')); 
            var bgpos = '50% '+ yPos + 'px';
            $obj.css('background-position', bgpos );
        }); 
    });
    
});