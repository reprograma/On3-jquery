function showHide(itemMostar, itemEsconder){
    $(itemMostar).show();
    $(itemEsconder).hide();    
}
$(document).ready(function () {
    //novidades
    $("#altera").mouseenter(function(){
        $("#altera").addClass("altera");
    })
    $("#altera").mouseleave(function(){
        $("#altera").removeClass("altera");
    })

    $("#altera2").mouseenter(function(){
        $("#altera2").addClass("altera");
    })
    $("#altera2").mouseleave(function(){
        $("#altera2").removeClass("altera");
    })

    $("#altera3").mouseenter(function(){
        $("#altera3").addClass("altera");
    })
    $("#altera3").mouseleave(function(){
        $("#altera3").removeClass("altera");
    })


    //botão novidades
    
    //car1
    $("#botao_detalhes").click(function () {
        showHide("#detalhes1","#conteudo_card1");
    })
   
    $("#botao_voltar1").click(function () {
        showHide("#conteudo_card1","#detalhes1");
    })

    //card2
    $("#botao_detalhes2").click(function () {
        showHide("#detalhes2","#conteudo_card2");
    })
   
    $("#botao_voltar2").click(function () {
        showHide("#conteudo_card2","#detalhes2");
    })

    //card3
    $("#botao_detalhes3").click(function () {
        showHide("#detalhes3","#conteudo_card3");
    })
   
    $("#botao_voltar3").click(function () {
        showHide("#conteudo_card3","#detalhes3");
    })    
    

    //botão nos eventos
      
    $("#botao_fechar").hide();
    $("#botao_leia_mais").click(function () {
        showHide(".saber_mais","#botao_leia_mais");
        $("#botao_fechar").show();
    })
    $("#botao_fechar").click(function () {
        $(".saber_mais").hide();
        showHide("#botao_leia_mais","#botao_fechar");
    })
   
});
