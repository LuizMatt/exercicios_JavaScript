/* Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function mediaNotas(vetor) {
    let somaValores = 0
    for (let index = 0; index < vetor.length; index++) {
        somaValores += vetor[index]
    }
    const resultado = somaValores / vetor.length
    return resultado
}

const notas = [3, 7, 1, 9];
console.log(mediaNotas(notas))

