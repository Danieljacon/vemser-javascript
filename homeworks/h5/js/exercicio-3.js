const exercicio3 = () => {
  const displayColor = document.getElementById("display-color");
  const btnChangeColor = document.getElementById("btn-change-color");
  const btnResetColor = document.getElementById("btn-reset-color");
  const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

  const changeColor = async () => {
    btnChangeColor.disabled = true;
    btnResetColor.disabled = true;


    const color = new Promise((resolve) => {
      setTimeout(() => {
        btnResetColor.disabled = false;
        btnChangeColor.disabled = false;
        resolve(colors[Math.floor(Math.random() * colors.length)]);
      }, 2000);
    });

    displayColor.style.backgroundColor = await color;
  };

  const resetColor = () => {
    displayColor.style.backgroundColor = "transparent";
  };

  btnChangeColor.addEventListener("click", changeColor);
  btnResetColor.addEventListener("click", resetColor);
};
