/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

Entrada => Código do aluno e 3 notas

nota1 - peso 4
nota2, nota3 - peso 3
Saída => Código do aluno, três notas, média e mensagem de Aprovado ou Reprovado

Aprovado => média >= 5
Reprovado => média < 5
*/
function calcularNotaFinal(codAluno, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3];
    notas.sort((a, b) => b - a);

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${mediaFinal.toFixed(2)}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`);
}

while (true) {
    let codAluno = parseInt(prompt("Digite o código do aluno (número negativo para sair):"));
    if (codAluno < 0) break;

    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    calcularNotaFinal(codAluno, nota1, nota2, nota3);
}
