const displayAntes2017 = document.getElementById("s8-antes2017");
const displayDepois2017 = document.getElementById("s8-depois2017");

const salarioInicial = 1000;
const ajusteAntes2017 = 1.5;
const anoContratacao = 2013;
const anoAtual = 2022;

const aumentoAte2017 = () => {
  let salario = salarioInicial;
  for (let i = anoContratacao; i <= 2016; i++) {
    salario = (salario * (ajusteAntes2017 / 100 + 1)).toFixed(2);
  }
  displayAntes2017.innerHTML = `R$${salario}`;
  return salario;
};

const aumentoDepois2017 = () => {
  let salario = aumentoAte2017();
  let ajuste = ajusteAntes2017;
  for (let i = 2017; i <= anoAtual; i++) {
    ajuste = ajuste * 2;
    salario = (salario * (ajuste / 100 + 1)).toFixed(2);
  }
  displayDepois2017.innerHTML = `R$${salario} <br> (ajuste de ${ajuste}%)`;
};

aumentoDepois2017();
aumentoAte2017();
