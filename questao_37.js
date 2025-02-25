/*
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos

Entrada => número termo(numero em que aumenta), primeiro termo(numero inicial), razão(numero q multiplica)
*/

function progressaoAritmetica(nTermo, pTermo, razao) {
    let progressao = []
    for (let i = 0; i < nTermo; i++) {
        let termo = pTermo + i * razao;
        progressao.push(termo);
    }
    return progressao
}
console.log(progressaoAritmetica(5, 2, 3))

function progressaoGeometrica(nTermos, pTermo, razao) {
    let progressao = [];

    for (let i = 0; i < nTermos; i++) {
        let termo = pTermo * Math.pow(razao, i);
        progressao.push(termo);
    }

    return progressao;
}

console.log(progressaoGeometrica(5, 3, 2));
