'use strict'

const myWordList =  [
    {
      text: 'Pencil',
      total: 6
    },
    {
      text: 'Thermo',
      total: 2
    },
    {
      text: 'TV',
      total: 8
    },
    {
      text: 'Phone',
      total: 4
    }
  ];

//en esta funcion toma como parametro CUALQUIER ARRAY PARA QUE SE PUEDA UTILIZAR
//la longitud del array será el límite de vueltas y es menor que i para que se ejecute 4 veces
//dentro se llama a la funcion writeThis que va a repetir la escritura
//primera vuelta el texto de la clave objeto tantas veces como ponga en la cifra de la clave total
  function writeMyArray(arr){
    for(let i = 0; i < arr.length; i++){
      writeThis( arr[i].text,arr[i].total);
    }

  }

  function writeThis(word, times){
    for(let i = 1; i <= times; i++){//cambio el menor o igual sino se queda uno menos
        console.log(word);
    }
  }
    writeMyArray(myWordList);