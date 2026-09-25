let numeroUsuario = parseInt(prompt("Dame un número: "));

function calcularDoble(numero) {
    let resultado = numero *2;
    return resultado;    
}

let valorCalculado = calcularDoble(numeroUsuario);
console.log(valorCalculado);