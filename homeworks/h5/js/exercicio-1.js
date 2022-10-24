const exercicio1 = () => {
  const btnOpenMessage = document.getElementById("e1-btn");

  const openModal = async () => {
    const conectionFailed = new Promise((resolve) => {
      resolve("Sua conexão falhou!!! Tente novamente mais tarde.");
    });

    alert(await conectionFailed);
  };

  btnOpenMessage.addEventListener("click", openModal);
};
