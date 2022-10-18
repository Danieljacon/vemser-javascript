const exercicio2 = () => {
    const textToChange = selectHtml("e2-text-color");
    const inputChangeColor = selectHtml("e2-input-change-color");

    inputChangeColor.addEventListener("input", () => {
        textToChange.style.color = inputChangeColor.value;
    });
}
