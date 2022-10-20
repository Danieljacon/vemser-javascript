const exercicio3 = () => {
  const arrayInicial = [1.23, 48.11, 90.11, 8.5, 9.99, 1, 1.1, 67];

  // modificar primeiro, terceiro e sexto elemento
  const arrayModificado = arrayInicial.map((elemento, indice) => {
    if (indice === 0 || indice === 2 || indice === 5) {
      return elemento * 2;
    }
    return elemento;
  });
};
