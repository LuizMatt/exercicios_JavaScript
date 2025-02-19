/* 
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

Entrada => Mês em que foi pago a anuidade (em número) e o valor da anuidade
Saída =>  Valor a ser pago para o respectivo mês

A anuidade sempre é paga em Janeiro
Por mês se cobra 5% de juro composto do 

Ou seja, informa o mês e cálcula quanto de juros foi gerado até ele

Mês atual - 1 (Janeiro)
*/

function calcularJurosAnuidade(mes, valorAnuidade) {
    if (mes >= 1 && mes <= 12) {
        let quantidadeDeMeses = mes - 1
        valorAnuidade = valorAnuidade * (1 + 0.05) ** quantidadeDeMeses
        return parseFloat(valorAnuidade.toFixed(2))

    }
}

const valorCalculado = calcularJurosAnuidade(1, 100)
const valorCalculado2 = calcularJurosAnuidade(4, 200)

function exibirJuros(valorTotal) {
    if (typeof valorTotal === 'number') {
        return `O valor com juros aplicado é de ${valorTotal.toFixed(2)}`
    } else {
        return "Valor inválido"
    }
}

console.log(exibirJuros(valorCalculado))
console.log(exibirJuros(valorCalculado2))



