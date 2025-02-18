/* 
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

*/

function verificarDivisibilidade(number) {
    if (number % 3 == 0) {
        return true
    } else {
        return false

    }
}

verificarDivisibilidade(9)
verificarDivisibilidade(5)