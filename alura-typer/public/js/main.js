
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


function inserePlacar() {
    let tabela = $(".placar").find("tbody");
    let contadorPalavras = $("#contadorPalavras").text(quantidadePalavras - 1);
    let linha = "<tr>" + "<td>" + usuario + "</td>" +
        "<td>" + numeroPalavras + "</td>" + " </tr>";

}




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


campo.on("input", function () {
    let digitado = campo.val();
    let comparavel = frase.substr(0, digitado.length);
    if (digitado == comparavel) {
        campo.addClass("borda-verde");
        campo.removeClass("borda-vermelha");
    } else {
        campo.addClass("borda-vermelha");
        campo.removeClass("borda-verde");
    }
});





$("#reiniciarJogo").on("click", function () {

    campo.attr("disabled", false);
    tempoRestante = 3;
    $("#tempo").text("3");



    $("#secs ").text(" secs");

    $("#contadorPalavras").text(0);
    $("#contadorCaracteres").text(0);


    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");



});