function mostrar()
{

	var contador;
	var acumulador=0;
	var numeroIngresado = prompt("ingrese el número de repeticiones");
	numeroIngresado=parseInt(numeroIngresado);


	for (contador=0;contador<=numeroIngresado;contador++){

		if (contador%2 == 0) {
			acumulador++;
			console.log(contador);

		}

	}
	console.log("Cantidad de pares: "+acumulador);

}//FIN DE LA FUNCIÓN