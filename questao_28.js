/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/
function verificarNumeros() {
    let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let quantidadePares = 0
    let quantidadeImpares = 0


    listaNumeros.forEach((item) => {
        if (item % 2 == 0) {
            quantidadePares++
        } else {
            quantidadeImpares++
        }
    });

    const resultado = `Quantidade de pares: ${quantidadePares}. Quantidade impares: ${quantidadeImpares}`
    return resultado
}

console.log(verificarNumeros())