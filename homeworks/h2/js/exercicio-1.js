const exercicio1 = () => {
  const textToChange = document.getElementById("e1-new-text");
  const buttonChangeText = document.getElementById("e1-change-text");
  const buttonUpdatePage = document.getElementById("e1-update-page");

  buttonChangeText.addEventListener("click", () => {
    textToChange.innerText = "Eis aqui o novo texto aos senhores!";
  });

  buttonUpdatePage.addEventListener("click", () => {
    window.location.reload();
  });
};
