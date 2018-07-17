function mostrar()
{
//tomo la edad  

	var edadPersona;

	edadPersona = document.getElementById('edad').value;
	edadPersona = parseInt(edadPersona);

	if (edadPersona < 13) {
		alert("Niño");
	}
	else {
		if (edadPersona >= 18) {
			alert("Persona mayor de edad");	
		}
		else{
			alert("Persona adolecente");
		}
	}

}//FIN DE LA FUNCIÓN