const ex3Button = document.getElementById("ex-3");
const ex3Display = document.getElementById("ex-3-display");

const conversa = [
  { nome: "Jana", mensagem: "Olá, tudo bem?" },
  { nome: "Daniel", mensagem: "Opa, boa tarde!" },
  { nome: "Jana", mensagem: "Qual o problema?" },
  { nome: "Daniel", mensagem: "Minha internet não funciona de jeito nenhum" },
  { nome: "Jana", mensagem: "Não sei como ajudar, até mais." },
];

const mostrarConversa = async () => {
  const mensagem = (nome, mensagem) => {
    return new Promise((resolve) => {
      resolve(`<p><strong>Nome: ${nome}</strong> <br> - ${mensagem}</p>`);
    });
  };
  ex3Display.innerText = "";
  i = 0;

  const timechat = setInterval(async () => {
    i++;
    i >= conversa.length
      ? clearInterval(timechat)
      : (ex3Display.innerHTML += await mensagem(
          conversa[i].nome,
          conversa[i].mensagem
        ));
  }, 2000);
};

ex3Button.addEventListener("click", mostrarConversa);
