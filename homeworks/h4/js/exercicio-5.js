const exercicio5 = () => {
  const queijos = ["gorgonzola", "minas", "parmesão", "prato", "mussarela"];
  const queijosEsquecidos = ["provolone", "ricota", "mascarpone"];
  const queijosJuntos = queijos.concat(queijosEsquecidos);

  const elementos = [
    {
      telaQueijos: document.getElementById("e5-lista-de-queijos"),
      lista: queijos,
      text: "Lista de queijos",
    },
    {
      telaQueijos: document.getElementById("e5-lista-de-queijos-esquecidos"),
      lista: queijosEsquecidos,
      text: "Lista de queijos esquecidos",
    },
    {
      telaQueijos: document.getElementById("e5-lista-de-queijos-crescente"),
      lista: queijosJuntos.sort(),
      text: "Lista de queijos juntos e em ordem crescente",
    },
    {
      telaQueijos: document.getElementById("e5-lista-de-queijos-cottage"),
      lista: queijosJuntos.concat("cottage").sort(),
      text: "Lista de queijos que contém a palavra cottage, em ordem crescente",
    },
  ];

  const paragraph = ({ text, queijo }) => {
    return `${text}: <span class="text-warning">${queijo.join(", ")}</span>`;
  };

  elementos.forEach(({ telaQueijos, lista, text }) => {
    telaQueijos.innerHTML = paragraph({
      text: text,
      queijo: lista,
    });
  });
};
