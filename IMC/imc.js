function pulaLinha(){

    document.write("<br>");
    document.write("<br>");

}

function mostra(linha){

    document.write(linha);
    pulaLinha();

}

function calculaImc(altura, peso){

    return Math.round(peso/(altura * altura));

}

var nome = prompt("Informe seu nome")
var alturaInformada = prompt( nome + ", informe sua altura");
var pesoInformado = prompt( nome + ", informe seu peso");

var imc = calculaImc(alturaInformada, pesoInformado);

mostra("O seu IMC, " + nome + ", é de " + imc);

if (imc < 18.5){

    mostra(nome + ", seu imc está abaixo do recomendado.");

}

if (imc >35){

    mostra(nome + ", seu imc está acima do recomendado.");

}

if (imc >=18.5 && imc <=35){
    mostra(nome + ", seu imc está no nível recomendado.");
}



