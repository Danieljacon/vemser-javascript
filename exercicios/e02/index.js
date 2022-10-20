const medalhas = [
  { posicao: 1, medalha: "ouro" },
  { posicao: 2, medalha: "prata" },
  { posicao: 3, medalha: "bronze" },
  { posicao: 4, medalha: "nada" },
  { posicao: 5, medalha: "nada" },
];

medalhas.map((medalha) => {
  console.log(`${medalha.posicao}º lugar: ${medalha.medalha}`);
});
