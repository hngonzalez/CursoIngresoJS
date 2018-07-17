function mostrar()
{
//tomo la edad  

	var edadPersona;

	edadPersona = document.getElementById('edad').value;
	edadPersona = parseInt(edadPersona);

	if (edadPersona < 13 || edadPersona > 17) {
		alert("Esta persona no es adolecente");
	}

	/*
	&& es and
	|| es or
	*/
	
}//FIN DE LA FUNCIÓN