const exercicio1 = () => {
  const vetorInicial = document.getElementById("e1-vetorInicial");
  const vetorOrdemCrescente = document.getElementById("e1-ordemCrescente");
  let vetor = [22, 10, 62, 34, 42, 67, 13, 19, 37, 99];

  vetorInicial.innerHTML = vetor;

  vetor.map(() => {
    let novoVetor = vetor.sort((a, b) => a - b);
    return (vetorOrdemCrescente.innerHTML = novoVetor);
  });
};
