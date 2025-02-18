/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos*/

function jurosSimples(taxa, capital, tempo) {
    let jurosCalculado = capital * tempo * taxa
    let montante = jurosCalculado + capital
    return montante.toFixed(2)
}


function jurosComposto(taxa, capital, tempo) {
    let montante = capital * (1 + taxa) ** tempo
    return montante.toFixed(2)
}

console.log("Juros Simples:", jurosSimples(0.05, 500, 27));
console.log("Juros Compostos:", jurosComposto(0.05, 500, 27));