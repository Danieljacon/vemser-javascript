const exercicio10 = () => {
  const displayTabela = document.getElementById("e10-tabela");
  const displayResultado = document.getElementById("e10-resultado");
  displayTabela.innerHTML = "";

  const items = [
    { item: "perfume", valor: 1236.99 },
    { item: "brinco", valor: 134.28 },
    { item: "gravata", valor: 189.89 },
    { item: "sapato", valor: 899.99 },
    { item: "casaco", valor: 2568.78 },
    { item: "terno", valor: 3566.99 },
    { item: "vestido", valor: 4896.99 },
  ];

  let valorFinal = 0;

  items.forEach((e) => {
    displayTabela.innerHTML += `
        <tr>
            <td>${e.item}</td>
            <td>${e.valor}</td>
        </tr>
    `;
    valorFinal += e.valor;
  });

  displayResultado.innerHTML = `A soma das compras é de: R$${valorFinal.toLocaleString("pt-br")}`;
};

exercicio10();
