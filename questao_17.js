/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:

A => 10%
B => 15%
C => 20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

Entrada: plano e salário do funcionário
Saída: novo salário
Default: "Plano inválido"
*/

function reajusteSalarial(plano, salario) {
    let reajuste = 0;
    switch (plano) {
        case "A":
            reajuste = salario * 1.1
            console.log(`Novo salário: ${reajuste}`)
            break;
        case "B":
            reajuste = salario * 1.15
            console.log(`Novo salário: ${reajuste}`)
            break;
        case "C":
            reajuste = salario * 1.20
            console.log(`Novo salário: ${reajuste}`)
            break;
        default:
            console.log("Plano inválido.")
            break;
    }
}

reajusteSalarial("A", 1000)
reajusteSalarial("B", 1000)
reajusteSalarial("C", 1000)