
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
    let cronometroID = setInterval(function () {
        tempoRestante--;
        $("#tempo").text(tempoRestante);
        if (tempoRestante < 1) {
            campo.attr("disabled", true);
            $("#tempo").text("Tempo encerrado!");
            $("#secs").text(" ");
            clearInterval(cronometroID);
        }
    }, 1000);


})






$("#reiniciarJogo").on("click", function () {

    campo.attr("disabled", false);
    tempoRestante = 3;
    $("#tempo").text("3");



    $("#secs ").text(" secs");

    $("#contadorPalavras").text(0);
    $("#contadorCaracteres").text(0);



});