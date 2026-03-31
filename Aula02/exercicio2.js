function Exemplo2()

{
let numero = Number(document.getElementById("numero").value);

let tCelsius;

tCelsius = numero - 32 * 5 / 9;

document.getElementById("resultado").innerHTML = "<p>A temperatura em Celsius e: " + tCelsius + "</p>";
}