/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

const vetorInteiro = [5, 8, 9, 4]
const vetorString = ["2", "7", "6", "1"]
const vetorDouble = [2.9, 3.0, 4.5, 6.9]

function unicaoConcat(vetor1, vetor2) {
    const vetoresConcatenados = vetor1.concat(vetor2)
    return vetoresConcatenados
}

console.log(unicaoConcat(vetorInteiro, vetorString))
console.log(unicaoConcat(vetorInteiro, vetorDouble))