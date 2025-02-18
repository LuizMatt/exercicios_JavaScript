/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operacoes(a, b) {
    return {
        soma: a + b,
        sub: a - b,
        mult: a * b,
        div: a / b
    }
}

let resultado = operacoes(5, 4)
console.log(resultado.soma)
console.log(resultado.sub)
console.log(resultado.mult)
console.log(resultado.div)