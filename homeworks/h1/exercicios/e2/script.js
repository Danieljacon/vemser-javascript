const resultado = document.getElementById("resultado");
const valor1 = prompt("Digite o primeiro valor");
const valor2 = prompt("Digite o segundo valor");

function soma(val1, val2) {
    return resultado.innerHTML = `${parseFloat(val1) + parseFloat(val2)}`;
}

soma(valor1, valor2);
