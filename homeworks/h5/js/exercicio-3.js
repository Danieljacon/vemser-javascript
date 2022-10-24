const exercicio3 = () => {
  const displayColor = document.getElementById("display-color");
  const btnChangeColor = document.getElementById("btn-change-color");
  const btnResetColor = document.getElementById("btn-reset-color");
  const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

  const changeColor = async () => {
    btnChangeColor.disabled = true;
    let i = 0;

    const color = new Promise((resolve) => {
      const interval = setInterval(() => {
        i++;
        if (i === colors.length) {
          i = 0;
        }
        resolve((displayColor.style.backgroundColor = colors[i]));
      }, 2000);

      const resetColor = () => {
        displayColor.style.backgroundColor = displayColor.style.backgroundColor;
        btnChangeColor.disabled = false;
        clearInterval(interval);
      };

      btnResetColor.addEventListener("click", resetColor);
    });

    displayColor.style.backgroundColor = await color;
  };

  btnChangeColor.addEventListener("click", changeColor);
};
