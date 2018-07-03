/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{

	var nombre;
	nombre = prompt("Ingrese su nombre: ");
	document.getElementById('elNombre').value = nombre;

	/*
	Puedo usar el document.getElementById('').value con un = x adelante o atras
	dependiendo de lo que quiera mostrar

	document.getElementById('elNombre').value = nombre; muestro lo que tiene nombre en el id elNombre
	nombre = document.getElementById('elNombre').value; lo que tiene el id elNombre lo muestro en nombre
	*/
	
}

