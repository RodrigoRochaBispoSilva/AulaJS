document.write

var valor = Number(prompt("Digite o valor da prestacao em atraso"));
var taxa = Number(prompt("Digite o valor da taxa"));
var tempo = Number(prompt("Digite o tempo"));

var resultado = valor + (valor * (taxa * taxa/100) * tempo);
document.write("<p>O valor da parcela sera" + resultado + "</p>")