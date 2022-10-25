const exercicio2 = () => {
  const btnShowTime = document.getElementById("e2-btn-showtime");
  const btnResetTime = document.getElementById("e2-btn-resetime");
  const displayShowTime = document.getElementById("e2-showtime");

  const showTime = () => {
    let time;
    const timeString = () => {
      return (displayShowTime.innerText = new Date().toLocaleTimeString());
    };

    setTimeout(() => {
      time = setInterval(() => {
        timeString();
      }, 1000);
    }, 2000);

    const resetTime = () => {
      clearInterval(time);
      displayShowTime.innerText = displayShowTime.innerText;
    };
    btnResetTime.addEventListener("click", resetTime);
  };

  btnShowTime.addEventListener("click", showTime);
};
