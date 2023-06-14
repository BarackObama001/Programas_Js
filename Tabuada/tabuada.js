function pulaLinha(){
    document.write("<br><br>");

}

function mostra(texto){
    document.write(texto);
    pulaLinha();

}

for(var multiplicador =0; multiplicador < 10; multiplicador++){
    // mantém menor que dez, pois como começa com 0, se repetirá 10 vezes
    mostra(7 * multiplicador);

}

