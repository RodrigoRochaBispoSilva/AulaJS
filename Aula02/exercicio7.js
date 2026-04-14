function Exemplo7()
{
let qtd= Number (document.getElementById("qtd").value);
let preco = Number (document.getElementById("preco").value);
 
let subtotal, desconto, final;
 
subtotal= qtd * preco
desconto = subtotal * 0.10
final = subtotal - desconto
 
 
document.getElementById("resultado").innerHTML = "<p> O subtotal é: " + subtotal +"</p>";
document.getElementById("resultado").innerHTML = "<p> O desconto é: " + desconto +"</p>";
document.getElementById("resultado").innerHTML = "<p> O valor final é: " + final +"</p>";
 
};