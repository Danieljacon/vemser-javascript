// reduce
/* const frutas = ["banana", "melancia", "jabuticaba", "maçã", "banana", "banana"];

frutas.reduce((acumulador, valorAtual) => {

}, [])

 */

const numeros = [1, 2, 3, 4, 5];

const reducer = (acumulador, valorAtual) => {
    return acumulador + valorAtual;
}

console.log(numeros.reduce(reducer, 0))
