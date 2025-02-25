/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.

Função 1:
Entrada => Recebe um vetor, número como parâmetro
Saída => Vetor múltiplicado pelo número

Função 2:
Entrada => Recebe um vetor, número como parâmetro
Saída => Vetor múltiplicado pelo número se o número > 5

*/

function multiplicandoVetor(vetor, numero) {
    if (isNaN(numero)) {
        let validacao = "Valor inválido"
        return validacao
    } else {
        for (let index = 0; index < vetor.length; index++) {
            vetor[index] = vetor[index] * numero

        }
        return vetor

    }
}

function multiplicandoVetorV2(vetor, numero) {
    if (isNaN(numero) && numero > 5) {
        let validacao = "Valor inválido"
        return validacao
    } else {
        for (let index = 0; index < vetor.length; index++) {
            vetor[index] = vetor[index] * numero

        }
        return vetor

    }
}

const vetorNumeros = [8, 3, 17, 25, 10];
const vetorNumeros2 = [8, 3, 17, 25, 10];

console.log(multiplicandoVetor(vetorNumeros, "Luiz"))
console.log(multiplicandoVetor(vetorNumeros, 2))

console.log(multiplicandoVetorV2(vetorNumeros2, 5))
