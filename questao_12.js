/* 
Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(n) {
    if (n < 0) return "Número inválido"; // Fatoriais negativos não existem
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)); // 120
console.log(fatorial(3)); // 6
console.log(fatorial(0)); // 1
console.log(fatorial(-5)); // "Número inválido"

