function exibirTexto(frase) {
    document.write(frase);
}

// exibirTexto(`
//     <h1>Olá</h1>
// `);

var texto01 = prompt("Digite um texto aqui");
var texto02 = prompt("Digite uma palavra");

exibirTexto(`O texto digitado é: ${texto01} e ${texto02}`)
