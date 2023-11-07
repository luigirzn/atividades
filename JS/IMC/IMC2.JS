function calcularIMC() {
    var nome = document.getElementById("nome").value;
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

   
    var imc = peso / (altura * altura);

   
    var classificacao = classificarIMC(imc);

  
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Nome: " + nome +
                            "<br>IMC: " + imc.toFixed(2) +
                            "<br>Classificação: " + classificacao;
}

function classificarIMC(imc) {
    if (imc < 16.9) {
        return "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Acima do peso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

