
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

    $("#contadorPalavras").text(quantidadePalavras - 1);
    $("#contadorCaracteres").text(quantidadeCaracteres);

})

let tempoRestante = $("#tempo").text();
campo.on("focus", function () {
    setInterval(function () {
        tempoRestante--;
        $("#tempo").text(tempoRestante);
        if (tempoRestante <= 1) {
            campo.attr("disabled", true)
            tempoRestante = 0;
        }
    }, 1000);
})