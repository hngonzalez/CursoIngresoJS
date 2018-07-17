function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	/*
	Por algún motivo esto no muestra el valor en el cuadro
	Solucionado, faltaba crear el input en el html
	*/
	
	var notaExamen = Math.floor((Math.random() * 10)+1);
	var aprobo;
	var excelente;
	var proximaSera;

	//------------- Comienzo a verificar nota
	
	//if (notaExamen != ) {
		if (notaExamen == 9 || notaExamen == 10 ) { //Si es 9 o 10
			aprobo = "EXCELENTE";
			document.getElementById('numRandom').value = aprobo + " (Nota "+notaExamen+")";			
		} 
		else {
			if (notaExamen >= 4 && notaExamen < 9) { //Si la nota es entre 4 y 9
				excelente = "APROBÓ";	
				document.getElementById('numRandom').value = excelente + " (Nota "+notaExamen+")";
			} 
			else {
				if (notaExamen < 4) { //Si la note ya es menor que 4
					proximaSera = "Vamos, la próxima se puede";
					document.getElementById('numRandom').value = proximaSera + " (Nota "+notaExamen+")";
				} 
				else {
				}
			}	
		}	
	/*} 
	else {
		prompt("Carge un valor entre 1 y 10");
	}
	*/

}//FIN DE LA FUNCIÓN