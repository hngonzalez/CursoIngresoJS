function mostrar()
{
//tomo la edad  

	var edadPersona;

	edadPersona = document.getElementById('edad').value;
	edadPersona = parseInt(edadPersona);

	if (edadPersona >= 18) {
		alert("Mayor de edad");
	}

	else {
		if (edadPersona < 18) {
			alert("Menor de edad");
		}
	}

}//FIN DE LA FUNCIÓN