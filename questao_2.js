/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function verificarTriangulo(a, b, c) {
    if (a == b && b == c) {
        return console.log("Triângulo equilátero")
    } else if (a == b && b != c || a != b && b == c) {
        return console.log("Triângulo isóceles")

    } else if (a != b && b != c) {
        return console.log("Triângulo escaleno")

    } else {
        console.log("Valor inválido")
    }
}

let equilatero = verificarTriangulo(5, 5, 5)
let isoceles = verificarTriangulo(10, 10, 5)
let escaleno = verificarTriangulo(10, 15, 5)