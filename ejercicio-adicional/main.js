'use strict'
// Construir una funcion que recibe un array como parámetro y lo recorra entero y para cada numero del array imprima si es Primo//
// Para ello vamos a definiruna funcion que se llamara esPrimo, que recibirá un numero entero como maximo hasta 20 y devolvera CIERTO si es Primo y falso en caso contrario.


const arrNum = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7, 11, 14, 20, 19, 17, 13, 19, 18];

function imprimeElPrimo (arr){
    for(let i = 0; i < arr.length; i++){
        if(esPrimo(arr[i])) {
            console.log(` ${arr[i]} es un número primo`)
        } else{
            console.log(`${arr[i]} no es un número primo`)
        }
    }
}



function esPrimo (numero) {
    if (numero === 2 || numero === 3 || numero === 5 || numero === 7 || numero === 11 || numero === 13 || numero === 17 || numero === 19) {
        
        console.log('true');
        return true;
     
    } else {
        console.log('false')
        return false;
    }
}
imprimeElPrimo(arrNum);
esPrimo();