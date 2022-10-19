const resultadoTela = document.getElementById("e6-result");

const calcular = (value) => {
  return (resultadoTela.value = resultadoTela.value + value);
};

const resultado = () => {
  return (resultadoTela.value = eval(resultadoTela.value));
};

const deletar = () => {
  return (resultadoTela.value = resultadoTela.value.slice(0, -1));
};

const limpar = () => {
  return (resultadoTela.value = "");
};
