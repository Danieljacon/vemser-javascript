const form = document.getElementById("form-cadastrar");
const inputNome = document.getElementById("input-nome");
const inputEmail = document.getElementById("input-email");
const inputSenha = document.getElementById("input-senha");

const el = document.createElement("p");

const sendForm = (e) => {
  const inputNomeValue = inputNome.value;
  const inputEmailValue = inputEmail.value;
  const inputSenhaValue = inputSenha.value;

  try {
    if (
      inputNomeValue === "" ||
      inputEmailValue === "" ||
      inputSenhaValue === ""
    ) {
      throw "Nome, senha ou email não podem ser vazios";
    } else if (inputSenhaValue.length < 6) {
      throw "Senha deve ter no mínimo 6 caracteres";
    } else if (inputNomeValue.length < 3) {
      throw "Nome deve ter no mínimo 3 caracteres";
    } else if (inputNomeValue.match(/\d+/g)) {
      throw "Nome não pode ter números";
    } else {
      alert("Você fez seu cadastro!")
    }
  } catch (err) {
    el.innerHTML = err;
    form.appendChild(el);
  }
  e.preventDefault();
};

form.addEventListener("submit", sendForm);
