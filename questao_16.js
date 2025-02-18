/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas
*/

/**
 * Entradas: dois números + string indicando a operação
 * Default: operação inválida
 * 
 */

function calculadora(firstNumber, secondNumber, operacao) {
    let resultado = 0;
    switch (operacao) {
        case "+":
            resultado = firstNumber + secondNumber
            console.log(resultado)
            break;
        case "-":
            resultado = firstNumber - secondNumber
            console.log(resultado)
            break;

        case "*":
            resultado = firstNumber * secondNumber
            console.log(resultado)
            break;
        case "/":
            resultado = firstNumber / secondNumber
            console.log(resultado)
            break;
        default:
            console.log("Operação inválida.")
            break;
    }
}

calculadora(10, 5, "+")
calculadora(10, 5, "-")
calculadora(10, 5, "*")
calculadora(10, 5, "/")