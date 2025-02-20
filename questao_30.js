/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

function identificarMaxMin() {
    const listaNumeros = [12, 15, 18, 19, 20, 5, 8, 25, 30, 35]
    let maiorNumero = listaNumeros[0]
    let menorNumero = listaNumeros[0]
    for (let index = 0; index < listaNumeros.length; index++) {
        if (listaNumeros[index] >= maiorNumero) {
            maiorNumero = listaNumeros[index]
        }

        if (listaNumeros[index] <= menorNumero) {
            menorNumero = listaNumeros[index]
        }
    }

    const resultado = `Maior número: ${maiorNumero}. Menor número: ${menorNumero}`
    return resultado;
}

console.log(identificarMaxMin())