const exercicio3 = () => {
    const value = document.getElementById("e3-value");
    const btnAdd = document.getElementById("e3-add");
    const btnReset = document.getElementById("e3-reset");

    btnAdd.addEventListener("click", () => {
        value.innerText = Number(value.innerText) + 1;
    });

    btnReset.addEventListener("click", () => {
        value.innerText = 0;
    });
}
