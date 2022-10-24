const exercicio2 = () => {
  const btnShowTime = document.getElementById("e2-btn-showtime");
  const btnResetTime = document.getElementById("e2-btn-resetime");
  const displayShowTime = document.getElementById("e2-showtime");

  const showTime = async () => {
    const time = new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Date().toLocaleTimeString());
      }, 2000);
    });

    displayShowTime.innerText = await time;
  };

  const resetTime = () => {
    displayShowTime.innerText = "";
  };

  btnShowTime.addEventListener("click", showTime);
  btnResetTime.addEventListener("click", resetTime);
};
