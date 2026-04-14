function Exemplo10()
{
    let valor = Number (document.getElementById("valor").value);
    let horas = Number (document.getElementById("horas").value);
   
    let salario;
   
    salario = valor*horas*30
   
    document.getElementById("resultado").innerHTML = "<p> O valor do salario é: " + salario +"</p>";
}