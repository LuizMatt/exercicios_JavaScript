/*
Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/
function analisarPontuacoes(stringPontuacoes) {
    // Converte a string de pontuações em um array de números
    let pontuacoes = stringPontuacoes.split(" ").map(Number);

    // Inicializa as variáveis com a primeira pontuação
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];
    let recordesQuebrados = 0;
    let piorJogo = 0;

    // Percorre as pontuações a partir do segundo jogo
    for (let i = 1; i < pontuacoes.length; i++) {
        // Verifica se a pontuação atual supera a maior já registrada
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i];
            recordesQuebrados++;
        }
        // Verifica se a pontuação atual é a pior já registrada
        if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i];
            piorJogo = i + 1; // O índice +1 porque os jogos são numerados a partir de 1
        }
    }

    // Retorna um array com a contagem de recordes batidos e o índice do pior jogo
    return [recordesQuebrados, piorJogo];
}

// Exemplo de uso
let stringPontuacoes = "10 20 20 8 25 3 0 30 50 1";
console.log(analisarPontuacoes(stringPontuacoes));


