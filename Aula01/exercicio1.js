document.write("<h1>Aula 01 - Exercicio 1</h1>");

var numero = prompt("Digite um numero qualquer:");

var quadrado = Number(numero) * Number(numero);
var cubo = Number(numero) * Number(numero) * Number(numero);

document.write("<p>O numero digitado foi "+ numero + "</p>");
 
document.write("<p style='color : red'>0 quadrado do numero e "  + quadrado + "</p>");
document.write("<p style='color : red'>0 cubo do numero e "  + cubo + "</p>");
