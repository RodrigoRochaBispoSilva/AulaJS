function exercicio3()
{
    let valor = Number(document.getElementById("valor").value);
    let taxa = Number(document.getElementById("taxa").value);
    let tempo = Number(document.getElementById("tempo").value);

    let parcela;

    parcela = valor + (valor*(taxa*taxa/100)*tempo);

    document.getElementById("resultado").innerHTML = "<p>O valor da parcela e de: " + parcela + "</p>";
 
}