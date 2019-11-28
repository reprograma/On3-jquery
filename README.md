# On3-jquery
Turma Online 3 | Front-end | 2019 | Semana 6 | Jquery

Introdução ao jQuery

O jQuery é uma biblioteca ou framework JavaScript rápida e rica em recursos tornando a manipulação de html de eventos, animações muito mais simples.
Leia mais sobre o jquery na documentação https://api.jquery.com/

O que é uma Biblioteca de Javascript?

Uma biblioteca é um arquivo de JavaScript que contém um monte de funções, e essas funções realizam alguma tarefa útil para sua página web.

Qual a vantagem de usar o jQuery?

Jquery é uma aplicação livre, ocupa pouco espaço e é muito ampla pois tem muitas coisas prontas é muito simples de usar possibilitando assim que você escreva muito menos código o lema é write less do more

O que é DOM?

Document Object Model ou seja Modelo de objeto de documento é uma interface de programação para documentos HTML,XML,SVG e etc.Ele fornece uma representação estruturada do documento.
Pense no Dom como uma árvore onde as tags htmls são os galhos e define os métodos para que possamos alterar estilo, conteúdo e etc.

1. Instalação

Existem algumas formas de instalar o jquery iremos fazer nossa instalação atráves do link cdn

Adicionar o script abaixo no header do documento index.html

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

2. Evento de inicialização do Dom

O código abaixo deve ser adicionado logo no ínicio do código jQuery. Esse comando verifica se Dom foi carregado.

$('document').ready(function() {
    Código aqui
});

O sinal de $ é usado para informa ou definir que vamos acessar o jQuery.