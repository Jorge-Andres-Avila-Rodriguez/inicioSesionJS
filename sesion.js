function validarAcceso(){
	const USUARIO_CORRECTO = "admin";
	const CONTRASENIA_CORRECTA ="1234";

	let intentos = 0;
	const MAX_INTENTOS = 3;
	let acceso = false;

	while(intentos < MAX_INTENTOS && acceso === false){

		let usuario = prompt("Ingrese su usuario:");
		let constrasenia = prompt("Ingrese su contraseña:");

		if (usuario === USUARIO_CORRECTO && constrasenia === CONTRASENIA_CORRECTA) {
			acceso = true;
		} else {
			intentos++;
			if(intentos < MAX_INTENTOS){
				console.log(`Datos incorrectos. Intento ${intentos} de ${MAX_INTENTOS}`)
			}
		}
	}

	if (acceso === true) {
		console.log("Bienvenido al sistema");
	} else{
		console.log(`Usuario bloqueado. Ha superado el númemro de intentos.`);
	}
}

validarAcceso();