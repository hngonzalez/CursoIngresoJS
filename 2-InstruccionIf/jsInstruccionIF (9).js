function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	/*
	
	Por algún motivo esto no muestra el valor en el cuadro 

	solucionado, faltaba el input en el html, había que cargarlo

	*/
	var random;

	random = Math.floor((Math.random() * 10) + 1);

	document.getElementById('numeroRandom').value = random;

}//FIN DE LA FUNCIÓN