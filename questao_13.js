/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function verificarDia(dia) {
    switch (dia) {
        case 1:
            console.log(false)
            break;
        case 2:
            console.log(true)
            break;

        case 3:
            console.log(true)
            break;

        case 4:
            console.log(true)
            break;

        case 5:
            console.log(true)
            break;

        case 6:
            console.log(true)
            break;

        case 7:
            console.log(false)
            break;


        default:
            console.log("Dia inválido")

            break;
    }
}

verificarDia(1)
verificarDia(2)
verificarDia(3)
verificarDia(8)