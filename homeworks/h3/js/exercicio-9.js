let resultadoFibonacci = [];
const e8fibonacci = document.getElementById("e8-fibonacci");

const fibonacci = (n) => {
  if (n < 2) {
    // caso o número seja menor que 2, retorna o próprio número, por que a sequência começa em 0 e 1
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // aqui a mágica acontece, a função chama a si mesma, e vai somando os números anteriores
};

for (let i = 0; i < 20; i++) {
  resultadoFibonacci += fibonacci(i) + ", "; // adiciona o resultado da função fibonacci na variável resultadoFibonacci
  e8fibonacci.innerHTML = resultadoFibonacci;
  if (i <= 20) {
    e8fibonacci.innerHTML += "...";
  }
}
