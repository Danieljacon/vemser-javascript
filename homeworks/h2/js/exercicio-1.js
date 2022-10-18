const exercicio1 = () => {
  const textToChange = selectHtml("e1-new-text");
  const buttonChangeText = selectHtml("e1-change-text");
  const buttonUpdatePage = selectHtml("e1-update-page");

  buttonChangeText.addEventListener("click", () => {
    textToChange.innerText = "Eis aqui o novo texto aos senhores!";
  });

  buttonUpdatePage.addEventListener("click", () => {
    window.location.reload();
  });
};
