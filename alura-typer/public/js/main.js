
let frase = $(".frase").text();
let numeroPalavras = frase.split(" ").length;
let tamanhoFrase = $("#tamanhoFrase");
tamanhoFrase.text(numeroPalavras);

let campo = $(".campoDigitacao");
let botao = $(".botao");



campo.on("input", function () {
    let conteudoCampo = campo.val();
    let quantidadePalavras = conteudoCampo.split(/\S+/).length;
    let quantidadeCaracteres = conteudoCampo.length;

    $("#contadorPalavras").text(quantidadePalavras);
    $("#contadorCaracteres").text(quantidadeCaracteres - (quantidadePalavras - 1));

})