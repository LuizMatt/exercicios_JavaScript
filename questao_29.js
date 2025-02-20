/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.

*/

function verificarIntervalo() {
    let numeros = [12, 15, 18, 19, 20, 5, 8, 25, 30, 35];
    let numerosDoIntervalo = 0
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] >= 10 && numeros[index] <= 20) {
            numerosDoIntervalo++
        }
    }
    const resultado = `Números dentro do intervalo: ${numerosDoIntervalo}`
    return resultado
}

console.log(verificarIntervalo())