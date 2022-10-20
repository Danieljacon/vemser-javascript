const e5resultado = document.getElementById("e5-resultado");
const e5valor1 = document.getElementById("e5-subst-1");
const e5valor2 = document.getElementById("e5-subst-2");
const e5btnChecar = document.getElementById("e5-btn-checar");

const compararSubstancias = (e) => {

    e.preventDefault();

    const subst1 = parseFloat(e5valor1.value);
    const subst2 = parseFloat(e5valor2.value) + 2;

    if (subst1 === subst2) {
        e5resultado.innerHTML = "As substâncias são iguais.";
    } else {
        e5resultado.innerHTML = "As substâncias são diferentes.";
    }
}

e5btnChecar.addEventListener("click", compararSubstancias);
