const exercicio2 = () => {
    const textToChange = document.getElementById("e2-text-color");
    const inputChangeColor = document.getElementById("e2-input-change-color");

    inputChangeColor.addEventListener("input", () => {
        textToChange.style.color = inputChangeColor.value;
    });
}
