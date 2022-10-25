const exercicio9 = () => {
  const displayPizzasPedidas = document.getElementById("e9-pizzas-pedidas");
  const displayRefrigerantsPedidos = document.getElementById("e9-refrigerantes-pedidos");
  const displaySucosPedidos = document.getElementById("e9-sucos-pedidos");
  const displayCervejasPedidas = document.getElementById("e9-cervejas-pedidas");

  let pizzas = [];
  let refrigerantes = [];
  let sucos = [];
  let cervejas = [];

  const CALABRESA = "calabresa ";
  const MAFIOSA = "mafiosa ";
  const QUATRO_QUEIJOS = "quatro queijos ";
  const MUSSARELA = "mussarela ";

  const clientes = [
    {
      nome: "Claudino",
      pizza: [CALABRESA, MAFIOSA],
      refrigerante: true,
      suco: false,
      cerveja: false,
    },
    {
      nome: "Maribela",
      pizza: [CALABRESA, MUSSARELA],
      refrigerante: true,
      suco: false,
      cerveja: false,
    },
    {
      nome: "Jacinto",
      pizza: [QUATRO_QUEIJOS],
      refrigerante: true,
      suco: false,
      cerveja: false,
    },
    {
      nome: "Olimpo",
      pizza: [MUSSARELA],
      refrigerante: true,
      suco: false,
      cerveja: false,
    },
    {
      nome: "Pafúncio",
      pizza: [QUATRO_QUEIJOS],
      refrigerante: false,
      suco: true,
      cerveja: true,
    },
    {
      nome: "Felisberta",
      pizza: [QUATRO_QUEIJOS],
      refrigerante: false,
      suco: true,
      cerveja: true,
    },
  ];

  clientes.filter((e) => {
    Array.isArray(e.pizza) && pizzas.push(...e.pizza);
    e.refrigerante && refrigerantes.push(e.nome);
    e.suco && sucos.push(e.nome);
    e.cerveja && cervejas.push(e.nome);
  });

  displayPizzasPedidas.innerHTML = `Pedidos de pizzas: ${pizzas.join(", ")}`;
  displaySucosPedidos.innerHTML = `Quem pediu suco: ${sucos.join(", ")}`;
  displayRefrigerantsPedidos.innerHTML = `Quem pediu refrigerante: ${refrigerantes.join(", ")}`;
  displayCervejasPedidas.innerHTML = `Quem pediu refrigerante: ${cervejas.join(", ")}`;
};
