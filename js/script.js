function calcular()
{
    var investimento = document.getElementById("investimento").value;
    var juros = document.getElementById("juros").value;
    var meses = document.getElementById("meses").value;

    juros = (juros/100)/12;

    var montante = investimento * Math.pow((1+juros), meses);

    document.getElementById("rendimento").value = "O valor ao final do investimento foi de: " + montante.toFixed(2); 

    var mensal = (montante - investimento)/meses;

    document.getElementById("mensal").value = "A média de ganhos mensais foi de: " + mensal.toFixed(2); 

    var bruto = montante - investimento;

    document.getElementById("bruto").value = "O ganho bruto esperado é de: " + bruto.toFixed(2); 
}