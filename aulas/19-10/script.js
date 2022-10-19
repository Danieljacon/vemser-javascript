let fruteira = ["banana", "tomate", "abacaxi"];

for(let i in fruteira) {
    console.log(`in = ${i}`)
}

for(let i of fruteira) {
    console.log(`of = ${i}`)
}

fruteira.map((e, index) => {
    console.log(`map = ${index}`)
})

fruteira.forEach((e, index) => {
    console.log(`forEach = ${index}`)
})

