function pulaLinha(){
    document.write("<br><br>");

}

function mostra(texto){
    document.write(texto);
    pulaLinha();

}
function sorteia(){
    return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade){   
    var segredos = [];

    var numero = 1;

    while(numero <= quantidade){

        var numeroAleatorio = sorteia();
        var achou = false;

    if(numeroAleatorio != 0){

        for(var posicao = 0; posicao < segredos.length; posicao++){

            if(segredos[posicao] == numeroAleatorio){
            achou = true;
            break;
            }
        }

        if(achou == false){
            segredos.push(numeroAleatorio);
            numero++;
        }
    }
}

    return segredos;

}

var segredos = sorteiaNumeros(3);

var caixaDeTexto = document.querySelector("input");
caixaDeTexto.focus();

mostra("chute um número de 1 a 10!");

function verifica(){

    var achou = false;
    
    for(var posicao = 0; posicao < segredos.length; posicao++){

    if(caixaDeTexto.value == segredos[posicao]){

        alert("você acertou!");
        achou = true;
        break;
        }
    }

    if(achou == false){
    alert("você errou!!!");
    }

    caixaDeTexto.value = ""; 
    caixaDeTexto.focus();

}

var botao = document.querySelector("button");
botao.onclick = verifica;

