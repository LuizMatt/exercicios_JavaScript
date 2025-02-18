/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

/*
parametro pe uma string com nome de fruta

switch e 3 case
defaoult Fruta indisponível

*/

function verificarFruta(fruta) {
    switch (fruta) {
        case "Maçã":
            console.log("Não vendemos essa fruta aqui")
            break;
        case "Kiwi":
            console.log("Estamos com escassez de kiwis")
            break;

        case "Melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break;
        default:
            console.log("Fruta indisponível")
            break;
    }
}

verificarFruta("Maçã")
verificarFruta("Kiwi")
verificarFruta("Melancia")
verificarFruta("Banana")