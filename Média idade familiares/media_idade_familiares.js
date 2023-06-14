function pulaLinha(){
    document.write("<br><br>");

}

function mostra(texto){
    document.write(texto);
    pulaLinha();
}

var quantidaDeFamiliares = parseInt(prompt("Quantos familiares você tem?"));

var totalIdades = 0; 

for (var idadeFamiliar = 1; idadeFamiliar <= quantidaDeFamiliares; idadeFamiliar++){
    var idade = parseInt(prompt("Digite a idade do familiar " + idadeFamiliar));
    totalIdades = totalIdades + idade;
        
}

var mediaIdades = totalIdades/quantidaDeFamiliares;

mostra(mediaIdades);