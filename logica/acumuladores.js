var totalFamiliares = parseInt(prompt("Quantidade de familiares"));

var numero = 1;
var totalIdades = 0;

while (numero <= totalFamilares) {
    var idade = parseInt(prompt("Informe a idade do familiar"));
    totalIdades = totalIdades + idade;
    numero++;
}

var mediaIdades = totalIdades/totalFamiliares;
document.write("A média das idades é " + mediaIdades);

document.write("Fim");