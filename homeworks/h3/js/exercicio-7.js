const e7resultado = document.getElementById("e7-resultado");
const e7input = document.getElementById("e7-input");

e7input,
  addEventListener("input", (e) => {
    if (isNaN(e7input.value)) {
      e7resultado.style.color = "red";
      e7resultado.innerHTML = "Você pode digitar apenas números!";
      e7input.value = e7input.value.slice(0, -1);
    } else {
      e7resultado.innerHTML = "Tá no caminho certo :)";
      e7resultado.style.color = "green";
    }
  });
