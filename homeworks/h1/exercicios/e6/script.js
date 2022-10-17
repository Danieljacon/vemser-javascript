const ano = prompt("Digite um ano: ");

function isBissexto(ano) {
    let conversao = ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0;
    return conversao ? "É bissexto" : "Não é bissexto";
}

alert(isBissexto(ano));
