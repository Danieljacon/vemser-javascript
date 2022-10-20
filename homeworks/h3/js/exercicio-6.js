const e6resultado = document.getElementById("e6-resultado");
const e6btnChecar = document.getElementById("e6-btn-checar");
let numPar = 0;

e6btnChecar.addEventListener("click", () => {
  while (numPar <= 100) {
    if (numPar % 2 === 0) {
      e6resultado.innerHTML += numPar + ", ";
      console.log(numPar);

      if (numPar === 100) {
        e6resultado.innerHTML += "Fim!";
        console.log("FIM!");
      }
    }
    numPar++;
  }
});
