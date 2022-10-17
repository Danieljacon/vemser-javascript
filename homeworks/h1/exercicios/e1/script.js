const lines = document.getElementById("lines");

let textAsterisk = "****************************************";
let textWelcome = "bem-vindo ao meu programa";
let textWorks = "ele realmente funciona";
let textUsed = "e usei função para fazer isso";

function asterisk() {
    return textAsterisk;
};

function welcome() {
    return textWelcome;
};

function works() {
    return textWorks;
};

function used() {
    return textUsed;
};

lines.innerHTML = `
    <p>${asterisk()}</p>
    <p>${welcome()}</p>
    <p>${asterisk()}</p>
    <p>${works()}</p>
    <p>${asterisk()}</p>
    <p>${used()}</p>
`;
