const exercicio1 = () => {
  const btnChecar = document.getElementById("e1-btn");

  btnChecar.addEventListener("click", () => {
    const array1 = ["daniel", "jacon", "maria"];
    const array2 = [...array1];

    alert(`Array 1: ${array1} \nArray 2: ${array2}`);
  });
};
