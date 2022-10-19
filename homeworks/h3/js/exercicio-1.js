const nota1 = document.getElementById("e1-nota1");
const nota2 = document.getElementById("e1-nota2");
const nota3 = document.getElementById("e1-nota3");

const btnCalcular = document.getElementById("e1-calcular");
const txtMedia = document.getElementById("e1-text-note");

let media = "";
let textos = {
  aprovado: `Você foi <strong class="text-success">aprovado!</strong>`,
  recuperação: `Você está de <strong class="text-warning">recuperação!</strong>`,
  reprovado: `Você foi <strong class="text-danger">reprovado!</strong>`,
  erro: `<strong class="text-danger">Você deve digitar apenas números!</strong>`,
};

const calcularMedia = (t1, t2, t3) => {
  media = ((t1 + t2 + t3) / 3).toPrecision(3);
  return (txtMedia.innerText = `Sua média é ${media}. `);
};

const checarAprovacao = (media) => {
  if (media >= 7) return (txtMedia.innerHTML += textos.aprovado);
  else if (media >= 5) return (txtMedia.innerHTML += textos.recuperação);
  else {
    return (txtMedia.innerHTML += textos.reprovado);
  }
};

btnCalcular.addEventListener("click", (e) => {
  e.preventDefault();

  const n1 = parseFloat(nota1.value);
  const n2 = parseFloat(nota2.value);
  const n3 = parseFloat(nota3.value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    txtMedia.innerHTML = textos.erro;
  } else {
    calcularMedia(n1, n2, n3);
    checarAprovacao(media);
  }
});
