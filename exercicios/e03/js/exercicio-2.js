const exercicio2 = () => {
  const btnChecar = document.getElementById("e2-btn");

  btnChecar.addEventListener("click", () => {
    const array1 = ["daniel", "jacon", "maria"];
    const array2 = ["ester", "klebio", "supermen"];
    const array3 = [...array1, ...array2]

    alert(`Array 1: ${array1} \nArray 2: ${array2} \nArray 3: ${array3}`);
  });
}
