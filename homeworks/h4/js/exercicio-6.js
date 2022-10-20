const exercicio6 = () => {
  const TERROR = "terror";
  const ROMANCE = "romance";
  const POLICIAL = "policial";
  const SUSPENSE = "suspense";

  const telaResultado = document.getElementById("e6-resultado");

  const livros = [
    { id: 01, categoria: TERROR, titulo: "It" },
    { id: 02, categoria: TERROR, titulo: "O Exorcita" },
    { id: 03, categoria: TERROR, titulo: "Drácula" },
    { id: 04, categoria: ROMANCE, titulo: "O Morro dos Ventos Uivantes" },
    { id: 05, categoria: POLICIAL, titulo: "O Silêncio dos Inocentes" },
    { id: 06, categoria: SUSPENSE, titulo: "Boneco de Neve" },
    { id: 07, categoria: SUSPENSE, titulo: "Bird Box" },
    { id: 08, categoria: ROMANCE, titulo: "Orgulho e Preconceito" },
  ];

  const livrosTerror = livros.filter((livro) => livro.categoria === TERROR);
  telaResultado.innerHTML = "";

  livrosTerror.map((element) => {
    telaResultado.innerHTML += `
            <th scope="row">${element.id}</th>
            <td>${element.categoria}</td>
            <td>${element.titulo}</td>
        `;
  });
};
