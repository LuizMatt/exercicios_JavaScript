/* 
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console
*/

function contagemNegativos() {
    let negativos = 0
    const listaNumeros = [12, -5, 8, -3, 15, -9, 7, -2, 20, -6];

    for (let index = 0; index < listaNumeros.length; index++) {
        if (listaNumeros[index] < 0) {
            negativos++
        }
    }
    return negativos
}

console.log(contagemNegativos())