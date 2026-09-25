import { sumar } from "./funciones.js";

const SALIR = "mayday";
let palabra;
let contador = 0;
let num1 = 0 , num2 = 0;

do {

    let opcion = parseInt(prompt("Que deseas realizar, selecciona una opción: \n 1. Suma. \n 2. Restar. \n 3. Multiplicar. \n 4. Dividir. \n 5. Salir."));

    if (opcion > 0 && opcion < 5) {
        num1 = parseInt(prompt("Ingrese el primer numero"));
        num2 = parseInt(prompt("Ingrese el segundo numero"));
    }

    switch (opcion) {
        case 1:
            
            sumar(num1, num2);
            
            break;
        case 2:
            // console.log("Restar");
            // restar(num1, num2);
            alert(`El resultado de la resta es: (${num1 - num2})`);
            break;
        case 3:
            // console.log("Multiplicar");
            // multiplicar(num1, num2);
            alert(`El resultado de la multiplicación es: (${num1 * num2})   `);
            break;
        case 4:
            // console.log("Dividir");
            // dividir(num1, num2);
            alert(`El resultado de la división es: (${num1 / num2})`);
            break;
        case 5:
            // console.log("Salir");
            palabra = prompt("Palabra clave para salir")
            break;
        default:
            console.log("Escribi bn omee!");
            break;
    }
    contador++;
    console.log("estoy en el ciclo");
} while (!(palabra === SALIR));
alert(`Saliste de la aplicación, la usaste ${contador} veces`);

// export function multiplicar (a , b){
//     alert(`El resultado de la multiplicación es: ${num1 * num2}`);

// }
// Sin import ------------- quitar la palabra export al inicio de la funcion y agregarla al final de la funcion
// export function sumar (a , b){  
//     alert(a + b);
// }

// export function restar (a , b){  
//     alert(a - b);
// }