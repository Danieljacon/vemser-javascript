const exercicio2 = () => {
  const arrayInicial = document.getElementById("e2-arrayInicial");
  const arrayPar = document.getElementById("e2-arrayPar");
  const array = [];
  for (let i = 0; i < 30; i++) {
    array.push(i + 1);
    arrayInicial.innerHTML += `${i + 1} `;

    if (array[i] % 2 === 0) {
      array[i] = `${array[i]} é par, indice ${i}`;
      arrayPar.innerHTML += `${array[i]}<br>`;
    }
  }
  console.log(array);
};
