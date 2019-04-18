// 'use strict';
const randomNumber= getRandomNumber(10);//<-- 
//                                          | 
//                                          |  
 function getRandomNumber(max) {       //   |
   return Math.ceil(Math.random() * max);// |
 }                          //              |                                
 console.log(randomNumber);//               |
///Explicacion: la funcion randomNumber tiene como parámetro max y como argumento 10. ¿donde devuelve su resultado? se llama a la función en una constante que va a guardar su dato cajita.

function writeThis(word, times){
    for(let i =1; i <= times; i++){//cambio el menor o igual sino se queda uno menos
        console.log(word);
    }
}

writeThis('patata', 10);
writeThis('aguacate', 7);
writeThis('Pizza', 50);
//AHORA ejecuta la llamada con el numero aleatorio generado como argumento del parametro times
writeThis('patata',randomNumber);
writeThis('aguacate',randomNumber);
writeThis('pizza',randomNumber);
