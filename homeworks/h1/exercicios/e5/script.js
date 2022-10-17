const segundos = prompt("Digite o número de segundos: ");
const minutos = 60;
const horas = 24;

const segundosDigitados = document.getElementById("segundosDigitados");
const conversao = document.getElementById("conversao");

function converterSegundos(segundos) {
  let diasConvertidos = segundos / minutos / minutos / horas;
  let horasConvertidos = (segundos / minutos / minutos) % horas;
  let minutosConvertidos = (segundos / minutos) % minutos;
  let segundosRestantes = segundos % minutos;

  const resultado = `${parseInt(diasConvertidos)} dias, ${parseInt(
    horasConvertidos
  )} horas, ${parseInt(minutosConvertidos)} minutos e ${parseInt(
    segundosRestantes
  )} segundos`;

  return resultado;
}

alert(converterSegundos(segundos));
segundosDigitados.innerText = segundos;
conversao.innerText = converterSegundos(segundos);

