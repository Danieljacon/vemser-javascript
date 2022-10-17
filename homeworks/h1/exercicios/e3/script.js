let value = prompt("Digite SIM ou NÃO");
const valueYesAwnser = value === "sim" || value === "SIM" || value === "Sim";
const valueNotAwnser = value === "não" || value === "NÃO" || value === "Não";

valueYesAwnser ? alert("Parabéns!")
  : valueNotAwnser ? naoAwnser()
  : alert("Você não tem noçoes dos seus atos?");

function naoAwnser() {
    value = prompt(`Você precisa informar um texto novamente`);
    return alert(`Seu último valor foi: ${value}.`);
}
