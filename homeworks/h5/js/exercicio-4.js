const exercicio4 = () => {
  const form = document.getElementById("e4-form");
  const btnSortear = document.getElementById("e4-btn-sortear");
  const displayRandomName = document.getElementById("e4-name");
  const inputVelocidade = document.getElementById("e4-btn-velocidade");
  const inputTempo = document.getElementById("e4-btn-tempo");
  const nomes = ["Daniel", "Jacon", "Teresa", "Aristótala", "Mercuria"];

  const changeName = (e) => {
    e.preventDefault();

    const inputVelocidadeValue = parseInt(inputVelocidade.value);
    const inputTempoValue = parseInt(inputTempo.value);

    try {
      if (isNaN(inputVelocidadeValue)) {
        throw "Você precisa preencher a velocidade";
      } else if (isNaN(inputTempoValue)) {
        throw "Você precisa preencher 0 tempo";
      } else if (inputTempoValue < 1000) {
        throw "O tempo precisa ser maior que 1 segundo. (1000)";
      }
      else {
        btnSortear.disabled = true;
        new Promise((resolve) => {
          let i = 0;

          const time = setInterval(() => {
            i++;
            if (i === nomes.length) {
              i = 0;
            }
            resolve((displayRandomName.innerHTML = nomes[i]));

            setTimeout(() => {
              btnSortear.disabled = false;
              clearTimeout(time);
            }, inputTempoValue);
          }, inputVelocidadeValue);
        });
      }
    } catch (err) {
      alert(err);
    }
  };

  form.addEventListener("submit", changeName);
};
