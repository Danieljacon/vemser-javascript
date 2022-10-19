const tempo = document.getElementById("tempo");
const btnIniciar = document.getElementById("s3-iniciar");
let segundos = 0;

const minutos = () => {
  tempo.innerHTML = "Iniciando... 3, 2, 1!";
  btnIniciar.disabled = true;

  const intervalo = setInterval(() => {
      tempo.innerHTML = segundos;
      segundos++;

    if (segundos >= 60) {
      clearInterval(intervalo);
      segundos = 0;
      tempo.innerHTML = "Acabou!";
      btnIniciar.disabled = false;
    }
  }, 1000);
};

btnIniciar.addEventListener("click", minutos);
