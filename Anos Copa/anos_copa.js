function pulaLinha(){
    document.write("<br><br>");

}

function mostra(texto){
    document.write(texto);
    pulaLinha();

}

var anoCopa = 1930;

var usuarioCopa = parseInt(prompt("Defina a data limite:"));

while(anoCopa <= usuarioCopa){
    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;
}

mostra("A copa será nestes anos!");