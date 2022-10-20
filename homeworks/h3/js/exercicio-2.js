const resultado = document.getElementById("e2-resultado");
let pares = [];
let somaTodosOsPares = 0;

for (let i = 0; i <= 100; i++) {
  i % 2 === 0 && (pares = [...pares, i]);
}

const somarItensArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    somaTodosOsPares += array[i];
  }
  return somaTodosOsPares;
};

somarItensArray(pares);
resultado.innerHTML = `A soma de todos os números pares entre 0 e 50 é <h3 class="text-danger">${somaTodosOsPares}</h3>`;
