export function sumar (a , b){  
    // alert(a + b);
    alert(`El resultado de la suma es: ${a + b}`);

}

export function restar (a , b){  
    // alert(a - b);
    alert(`El resultado de la resta es: ${a - b}`);
}

export function multiplicar (a , b){  
    // alert(a * b);
    alert(`El resultado de la multiplicación es: ${a * b}`);
}

export function dividir (a , b){  
    // alert(a / b);
    if(b == 0){
        alert("División invalida, no se puede dividir por cero.");
        return; 
    }
    alert(`El resultado de la división es: ${a / b}`);
}

