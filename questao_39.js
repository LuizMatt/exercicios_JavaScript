/*
Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.

Verificar tamanos dos array, se iguais, executar a função

*/

function trocaDeValores(vetorA, vetorB) {
    if (vetorA.length === vetorB.length) {
        for (let index = 0; index < vetorA.length; index++) {
            [vetorA[index], vetorB[index]] = [vetorB[index], vetorA[index]]
        }
        const resultado = `Vetor A: ${vetorA}. Vetor B: ${vetorB}`
        return resultado
    }
}

let vetorA = [1, 2, 3, 4, 5]
let vetorB = [6, 7, 8, 9, 10]

console.log(trocaDeValores(vetorA, vetorB))