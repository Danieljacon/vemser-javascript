const num1 = prompt("Digite um número: ");
const operation = prompt("Digite a operação: ");
const num2 = prompt("Digite outro número: ");

function calculadora(num1, operation, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  function calculos() {
    return operation === "+"
      ? num1 + num2
      : operation === "-"
      ? num1 - num2
      : operation === "*"
      ? num1 * num2
      : operation === "/"
      ? num1 / num2
      : "Operação inválida";
  }

  function calculosIncorretos() {
    return (
      (operation !== "+" &&
        operation !== "-" &&
        operation !== "*" &&
        operation !== "/") ||
      (num2 === 0 && operation === "/")
    );
  }

  return calculosIncorretos() ? "Operação inválida ou dividido por zero" : calculos();
}

alert(calculadora(num1, operation, num2));

// const operacoes = {
//   "+": num1 + num2,
//   "-": num1 - num2,
//   "*": num1 * num2,
//   "/": num1 / num2,
// };

// return !operacoes[operation]
//   ? "Operação inválida"
//   : num2 === 0 && operation === "/"
//   ? "Não é possível dividir por zero"
//   : operacoes[operation];
