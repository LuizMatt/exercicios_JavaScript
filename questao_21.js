/*
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:

Crianças com menos de 10 anos => R$80,00
Conveniados com idade entre 10 e 30 anos => R$ 50,00
Idade acima de 30 a 60 anos => R$ 95,00
Idade acima de 60 anos => R$ 130,00

Entrada => Idade do conveniado
Saída => 100 + adicional escolhido

*/
function calcularAdicional(idadeDependete) {
    let valorPlano = 100
    if (idadeDependete > 0 && idadeDependete < 10) {
        valorPlano += 80
        return valorPlano
    } else if (idadeDependete >= 10 && idadeDependete < 30) {
        valorPlano += 50
        return valorPlano
    } else if (idadeDependete >= 30 && idadeDependete < 60) {
        valorPlano += 95
        return valorPlano
    } else if (idadeDependete >= 60) {
        valorPlano += 130
        return valorPlano
    } else {
        return "Idade inválida"
    }
}

function retornarValor(valorPlano) {
    if (typeof valorPlano === 'number' && valorPlano > 0) {
        console.log(`O valor com dependente é de ${valorPlano}`)
    } else {
        console.log(`O valor é inválido`)

    }
}
const idadesCalculadas1 = calcularAdicional(10)
const idadesCalculadas2 = calcularAdicional(45)
const idadesCalculadas3 = calcularAdicional(80)
const idadesCalculadas4 = calcularAdicional(-5)



retornarValor(idadesCalculadas1)
retornarValor(idadesCalculadas2)
retornarValor(idadesCalculadas3)
retornarValor(idadesCalculadas4)