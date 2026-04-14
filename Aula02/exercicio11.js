function exercicio11()
{
    let valor = Number (document.getElementById("valor").value);
    let quantidade = Number (document.getElementById("quantidade").value);
    let min = Number (document.getElementById("min").value);

    let total;

    total = (valor*quantidade) + (min * 0.50);

    document.getElementById("resultado").innerHTML = "<p> O valor da corrida e: " + total + "</p>";
}