function Exemplo09()
{
    let peso = Number (document.getElementById("peso").value);
    let altura = Number (document.getElementById("altura").value);
   
    let resultado;
   
    resultado = ( peso / (altura * altura));
   
    document.getElementById("resultado").innerHTML = "<p> O valor de IMC é: " + resultado +"</p>";
 
}