const exercicio4 = () => {
  const trevas = document.getElementById("e3-trevas");
  const trevasSoma = document.getElementById("e3-trevas-soma");
  const castelos = document.getElementById("e3-castelos");
  const castelosSoma = document.getElementById("e3-castelos-soma");
  trevas.innerHTML = "";
  castelos.innerHTML = "";

  let trevasSomaValor = 0;
  let castelosSomaValor = 0;

  const OURO = "ouro";
  const PRATA = "prata";
  const BRONZE = "bronze";
  const MADEIRA = "madeira";
  const PEDRA = "pedra";
  const TREVAS = "trevas";
  const CASTELOS = "castelos";

  const arrayDeObjeto = [
    { idade: TREVAS, minerio: OURO, valor: 45 },
    { idade: TREVAS, minerio: PRATA, valor: 56 },
    { idade: TREVAS, minerio: BRONZE, valor: 78 },
    { idade: TREVAS, minerio: MADEIRA, valor: 90 },
    { idade: TREVAS, minerio: PEDRA, valor: 458 },
    { idade: CASTELOS, minerio: OURO, valor: 345 },
    { idade: CASTELOS, minerio: PRATA, valor: 568 },
    { idade: CASTELOS, minerio: MADEIRA, valor: 789 },
    { idade: CASTELOS, minerio: PEDRA, valor: 897 },
  ];

  arrayDeObjeto.map((objeto, index) => {
    const li = `<li>${arrayDeObjeto[index].minerio}: ${arrayDeObjeto[index].valor} sacas</li>`;

    if (objeto.idade === TREVAS) {
      trevasSomaValor += objeto.valor;
      trevas.innerHTML += li;
    } else {
      castelosSomaValor += objeto.valor;
      castelos.innerHTML += li;
    }
  });

  trevasSoma.innerText = `${trevasSomaValor} sacas totais`;
  castelosSoma.innerText = `${castelosSomaValor} sacas totais`;
};
