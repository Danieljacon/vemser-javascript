const minhaIdade = prompt("Digite sua idade: ");
const idadeDoIrmao = prompt("Digite a idade do seu irmão: ");

function diferencaDeIdade(minhaIdade, idadeIrmao) {
    return minhaIdade - idadeIrmao;
}

alert(`Nossa diferença de idade é: ${diferencaDeIdade(minhaIdade, idadeDoIrmao)}`)
