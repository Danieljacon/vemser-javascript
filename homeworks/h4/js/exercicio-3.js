const exercicio3 = () => {
  const array = [1.23, 48.11, 90.11, 8.5, 9.99, 1, 1.1, 67];
  const arrayInicial = document.getElementById("e3-arrayInicial");
  const arrayNovo = document.getElementById("e3-arrayNovo");
  let arrayModificado = [];

  arrayInicial.innerHTML = array.join(", ");

  array.map((elemento, indice) => {
    if (indice === 0 || indice === 2 || indice === 5) {
        arrayModificado.push(elemento * 2);
    }
  });
  arrayNovo.innerHTML = arrayModificado.join(", ");
};
