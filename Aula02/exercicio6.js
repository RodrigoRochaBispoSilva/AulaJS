function Exemplo6()
{
 
    let lado = Number(document.getElementById("lado").value);
 
    let resultado;
   
   resultado = (lado*lado);
 
    document.getElementById("resultado").innerHTML = "<p> O tamanho do lado da area do quadrado é de: " + resultado +"</p>";
}