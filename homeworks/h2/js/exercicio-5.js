const exercicio5 = () => {
  const result = document.getElementById("e5-resultado");
  const calc = document.getElementById("e5-calcular");
  let value1 = document.getElementById("e5-value-1");
  let value2 = document.getElementById("e5-value-2");
  const operation = document.getElementsByName("operation");

  calc.addEventListener("click", (e) => {
    e.preventDefault();

    const newValue1 = Number(value1.value);
    const newValue2 = Number(value2.value);

    operation.forEach((e) => {
      if (e.checked) {
        switch (e.value) {
          case "+":
            result.innerText = newValue1 + newValue2;
            break;
          case "-":
            result.innerText = newValue1 - newValue2;
            break;
          case "*":
            result.innerText = newValue1 * newValue2;
            break;
          case "/":
            result.innerText = newValue1 / newValue2;
            break;
          default:
            result.innerText = "Operação inválida";
        }
      }
    });
  });
};
