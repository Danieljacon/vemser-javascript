const exercicio8 = () => {
  const telaUniao = document.getElementById("e8-uniao");
  const telaIntersecao = document.getElementById("e8-intersecao");
  const telaDiferenca = document.getElementById("e8-diferenca");

  const valorA = [2, 4, 6, 7, 8, 22, 45, 34, 89, 75, 62, 54];
  const valorB = [22, 23, 57, 45, 77, 62, 56, 54, 97, 88, 33, 5];

  const intersecao = valorA
    .filter((item) => valorB.includes(item))
    .sort((a, b) => a - b);

  const uniao = valorA
    .concat(valorB)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort((a, b) => a - b);

  let diferenca = valorB
    .filter((e) => !valorA.includes(e))
    .sort((a, b) => a - b);

  telaUniao.innerHTML = `União: ${uniao.join(", ")}`;
  telaIntersecao.innerHTML = `Interseção: ${intersecao.join(", ")}`;
  telaDiferenca.innerHTML = `Diferença: ${diferenca.join(", ")}`;
};
