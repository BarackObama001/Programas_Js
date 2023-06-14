function pulaLinha(){
    document.write("<br><br>");

}

function mostra(texto){
    document.write(texto);
    pulaLinha();

}

function sorteia(n){

    return Math.round(Math.random() * n);

}

var numeroPensado = sorteia(100);
var nome = prompt("Digite seu nome:");

var tentativas = 1;

while(tentativas <= 3){
    var chute = parseInt(prompt(nome + " chute um número de 1 a 100!"));
    if(tentativas < 3 && chute != numeroPensado){
        mostra("Você errou, você tem mais " + tentativas + " tentativas.");
    }

    if(tentativas == 3 && chute != numeroPensado){
        mostra("Você errou, o número era " + numeroPensado);
        }

    if(chute == numeroPensado){
        mostra("Parabéns você acertou, o número realmente era " + numeroPensado)
        break;
    
    }

    tentativas++;

}