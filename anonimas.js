// FUNCIONES Declaradas ---------------------------
// let nombre = prompt("¿Cúal es tu nombre?");

// function saludar(nombre) {
//     console.log(`hola ${nombre}`);
// }

// ------------------------------------------------

// Function anónima -------------------------------
// function saludar() {
//     let nombre = prompt("¿Cúal es tu nombre?");
//     return nombre;
//     console.log(`hola ${nombre}`);
// }

// let nombre = saludar();

// ------------------------------------------------

// Funcion flecha --------------------------------
// function saludar () {
//     console.log(`hola`);
// }

// let saludar = function () {
//     console.log(`hola`);
// }

// saludar();
// saludar();

// function flecha --------------------------------
// let saludar = () => {
//     console.log(`hola`);
// }



let saludar = function () {
    console.log(`hola`);
    return nombre;
}

// quitar la palabra function y a la derecha de los parentesis agregar la flecha =>
let saludar = () => {
    console.log(`hola`);
    return nombre;
}


//Si es un solo parametro se pueden eliminar los parentesis 
let saludar = nombre => {
    console.log(`hola`);
    return nombre;
}

// si la funcion es de una sola linea se pueden omitir
let saludar = nopmbre => nombre;


function sumar (a, b) {
    return a + b;
}

let sumar = function (a, b) {
}

let sumar =  (a, b) =>{
    return a + b;
}

let sumar = (a, b) => a + b;