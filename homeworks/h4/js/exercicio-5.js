const exercicio5 = () => {
  const queijos = ["gorgonzola", "minas", "parmesão", "prato", "mussarela"];
  const queijosEsquecidos = ["provolone", "ricota", "mascarpone"];
  const queijosJuntos = queijos.concat(queijosEsquecidos);

  const telaListaDeQueijo = document.getElementById("e5-lista-de-queijos");
  const telaListaDeQueijosEsquecidos = document.getElementById(
    "e5-lista-de-queijos-esquecidos"
  );
  const telaListaDeQueijosJuntos = document.getElementById(
    "e5-lista-de-queijos-juntos"
  );
  const telaQueijosCrescente = document.getElementById(
    "e5-lista-de-queijos-crescente"
  );

  const telaQueijoCottage = document.getElementById(
    "e5-lista-de-queijos-cottage"
  );

  telaListaDeQueijo.innerHTML = `Lista de queijos: <span class="text-warning">${queijos.join(", ")}</span>`;
  telaListaDeQueijosEsquecidos.innerHTML = `Lista de queijos esquecidos: <span class="text-warning">${queijosEsquecidos.join(
    ", "
  )}</span>`;
  telaListaDeQueijosJuntos.innerHTML = `Lista de queijos juntos: <span class="text-warning">${queijosJuntos.join(
    ", "
  )}</span>`;

  let queijosCrescente = queijosJuntos.sort();
  telaQueijosCrescente.innerHTML = `Lista de queijos em ordem crescente: <span class="text-warning">${queijosCrescente.join(
    ", "
  )}</span>`;

  queijosCrescente.push("cottage");
  queijosCrescente = queijosCrescente.sort();
  telaQueijoCottage.innerHTML = `Lista de queijos em ordem crescente com cottage: <span class="text-warning">${queijosCrescente.join(
    ", "
  )}</span>`;
};
