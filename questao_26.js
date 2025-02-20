/*
Fazer um programa para encontrar todos os pares entre 1 e 100.

*/
function encontrarPares() {
    for (let numero = 0; numero <= 100; numero++) {
        if (numero % 2 == 0) {
            console.log(numero)
        }
    }
}

encontrarPares()