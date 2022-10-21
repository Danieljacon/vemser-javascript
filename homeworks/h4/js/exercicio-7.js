const exercicio7 = () => {
  const resultado = document.getElementById("e7-resultado");
  resultado.innerHTML = "";

  const medalhas = [
    { posicao: 1, medalha: "ouro" },
    { posicao: 2, medalha: "prata" },
    { posicao: 3, medalha: "bronze" },
    { posicao: 4, medalha: "sem medalha" },
    { posicao: 5, medalha: "sem medalha" },
  ];

  medalhas.map((medalha) => {
    return (resultado.innerHTML += `
            <td>${medalha.posicao}</td>
            <td>${medalha.medalha}</td>
        `);
  });
};
