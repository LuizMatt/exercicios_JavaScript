/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verificarStrings(string1, string2) {
    const arrayString1 = string1.split('')
    const arrayString2 = string2.split('')
    if (arrayString1.lenght == arrayString2.lenght) {
        return arrayString1.every((item, index) => item.toLowerCase() === arrayString2[index].toLowerCase());

    }
}

console.log(verificarStrings("matheus", "Matheus"))