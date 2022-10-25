const btnAdicionar = document.getElementById("adicionar");
const tabela = document.getElementById("body");

const teste = [{
    nome: "daniel", sobrenome: "jacon"
}]


btnAdicionar.addEventListener("click", () => {
    teste.map((e) => {
        tabela.innerHTML += `
        <tr>
        <td>${e.nome}</td>
        <td>${e.sobrenome}</td>
      </tr>
        `;
    })

})
