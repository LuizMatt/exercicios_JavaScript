/*
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.

Entrada => Vetor de notas
Saída => Conceito de cada nota
*/

function conceitoNotas(vetorNotas) {
    let conceito = []
    for (let index = 0; index < vetorNotas.length; index++) {
        if (vetorNotas[index] >= 0 && vetorNotas[index] < 5) {
            conceito.push("D")
        } else if (vetorNotas[index] >= 5 && vetorNotas[index] < 7) {
            conceito.push("C")

        } else if (vetorNotas[index] >= 7 && vetorNotas[index] < 9) {
            conceito.push("B")

        } else if (vetorNotas[index] >= 9 && vetorNotas[index] <= 10) {
            conceito.push("A")

        } else {
            conceito = "Nota inválida"
        }
    }
    return conceito
}
const notas = [8, 3.5, 10, 6.2, 9];

console.log(conceitoNotas(notas))

