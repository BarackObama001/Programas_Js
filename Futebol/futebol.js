function pulaLinha(){

    document.write("<br>");
    document.write("<br>");
}

function mostra(frase){

    document.write(frase);
    pulaLinha();
}

var vitorias = parseInt(prompt("Entre com o número de vitórias."));
var empates = parseInt(prompt("Entre com o número de empates."));

var pontos = vitorias * 3 + empates;

mostra("os pontos do seu time é " + pontos);

if(pontos >28){
    mostra("O seu time esta melhor do que o ano passado! ");

}

if(pontos <28){
    mostra("O seu time esta pior do que o ano passado. ");

}

if(pontos ==28){
    mostra("O seu time esta igual do que o ano passado. ");

}

mostra("FIM!");
