/*
O cardápio de uma lanchonete é o seguinte:

Código | Descrição do Produto     | Preço
-------|--------------------------|--------
 100   | Cachorro Quente          | R$ 3,00  
 200   | Hambúrguer Simples       | R$ 4,00  
 300   | Cheeseburguer            | R$ 5,50  
 400   | Bauru                    | R$ 7,50  
 500   | Refrigerante             | R$ 3,50  
 600   | Suco                     | R$ 2,80  

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.

Entrada => código do item e quantidade
Saída => quantidade a ser pago
Default => Item não existente
*/

function calcularComanda(codigo, quantidade) {
    let comanda = 0.0;
    switch (codigo) {
        case 100:
            comanda = quantidade * 3
            return parseFloat(comanda);
        case 200:
            comanda = quantidade * 4
            return parseFloat(comanda);
        case 300:
            comanda = quantidade * 5.5
            return parseFloat(comanda);
        case 400:
            comanda = quantidade * 7.5
            return parseFloat(comanda);
        case 500:
            comanda = quantidade * 3.5
            return parseFloat(comanda);
        case 600:
            comanda = quantidade * 2.8
            return parseFloat(comanda);

        default:
            return "Item não existente."
    }
}

console.log(calcularComanda(100, 1))
console.log(calcularComanda(800, 1))
console.log(calcularComanda(600, 1))