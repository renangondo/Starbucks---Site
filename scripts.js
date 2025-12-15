/*
    JavaScripit não é JAVA
    Variaveis (Qualquer Liguagem de programação)
        - Um pedacinho da memória do computador - separa o que você quer guardar
        - Armazena valores (Números, textos, booleanos)
        - Podemos manipular esses valores
        - Usamos um let ou const para declarar uma variável
        - console.log() -> Mostra algo no console do navegador

    Função - Uma função é um bloco de código que executa uma tarefa específica onde apenas executamos quando chamamos ela pelo nome.
        - Como declarar uma função
            function nomeDaFuncao() {}
        - Como chamar uma função
            nomeDaFuncao();

    Lógica de programação - Sequência de passos para resolver um problema
    Algoritmo - Conjunto de regras ou instruções para realizar uma tarefa ou resolver um problema

    document = HTML
    querySelector = Seleciona um elemento do HTML
     
*/

let imagem = document.querySelector(".imagem-copo");

let fundo = document.querySelector(".circulo");


function trocaImagem(endereco) {
    imagem.src = endereco;
}

function trocaFundo(cor) {
    fundo.style.background = cor;
}