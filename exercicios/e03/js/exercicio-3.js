const exercicio3 = () => {
  const btnChecar = document.getElementById("e3-btn");

  btnChecar.addEventListener("click", () => {
    const array1 = [
      {
        nome: "Daniel",
        dedos: 7,
      },
    ];
    const array2 = [
      {
        nome: "Lelo",
        dedos: 9,
      },
    ];
    const array3 = [...array1, ...array2];

    const numeroDeDedos = (...array3) => {
      return array3.map((pessoa) => pessoa.dedos).reduce((a, b) => a + b);
    };

    alert(`A soma de dedos é: ${numeroDeDedos(...array3)}`);
  });
};
