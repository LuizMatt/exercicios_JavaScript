/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

Entrada => altura(cm) e taxa de crescimento
Saída => caso a criança menor ultrapasse a maior, informar em quantos anos isso ocorre
*/

function crescimento(alturaCm1, alturaCm2, taxaCrescimento1, taxaCrescimento2) {
    let menorAltura = 0
    let maiorAltura = 0
    let taxaDoMenor = 0
    let taxaDoMaior = 0
    let contadorAnos = 0

    if (alturaCm1 === alturaCm2) {
        let erro = "Alturas iguais"
        return erro
    }

    if (alturaCm1 > alturaCm2) {
        menorAltura = alturaCm2
        taxaDoMenor = taxaCrescimento2
        maiorAltura = alturaCm1
        taxaDoMaior = taxaCrescimento1
    } else {
        menorAltura = alturaCm1
        taxaDoMenor = taxaCrescimento1
        maiorAltura = alturaCm2
        taxaDoMaior = taxaCrescimento2
    }

    if (taxaDoMenor <= taxaDoMaior) {
        let erro = "A criança menor nunca ultrapassará a maior."
        return erro
    }

    while (menorAltura <= maiorAltura) {
        maiorAltura += taxaDoMaior
        menorAltura += taxaDoMenor
        contadorAnos++
    }

    const resultado = `A menor criança ultrapassará a maior em ${contadorAnos} anos`
    return resultado
}

console.log(crescimento(120, 130, 5, 2));
console.log(crescimento(150, 140, 2, 3));
console.log(crescimento(110, 110, 3, 2));





