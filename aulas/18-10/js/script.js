function changeColor(color) {
  const text = document.getElementById("trocar");
  text.style.color = color;
}

// definição do elemento pai
const elementPai = document.getElementById("h1NewElement"); // definição do elemento pai
const titulo = document.createElement("h1"); // criando o elemento
const texto = document.createTextNode(
  "Este texto é gerado de forma automática"
); // incluindo o nó de texto ao elemento h1 criado
titulo.appendChild(texto); // incluiu o texto no h1
elementPai.appendChild(titulo); // anexa o elemento filho ao elemento pai (body);
