function mostrar()
{

	/*var numeroIngresado;
	var contador=0;

	numeroIngresado=prompt("Ingrese un numero: ");

	if (numeroIngresado <= 0) {
		for (contador;;contador++) {
			
		}
	} else {

	}*/




	/*                       SACAR NUMERO PRIMO
	var divisores;
	var numeroAnterior;
	var numeroIngresado;


	divisores=0;
	numeroIngresado=prompt("Ingrese número: ");
	numeroIngresado=parseInt(numeroIngresado);


	for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--){
		if (numeroIngresado%numeroAnterior==0) {
			divisores++;
		}
	}

	if (divisores==0) {
		console.log("es primo");
	} else {
		console.log("NO es de los numeros primos");
	}
	*/



	var divisores;
	var numeroAnterior;
	var numeroIngresado;
	var numerosRecorridos;

	divisores=0;
	numeroIngresado=prompt("Ingrese número: ");
	numeroIngresado=parseInt(numeroIngresado);


	for(numerosRecorridos=numeroIngresado;numerosRecorridos>1;numerosRecorridos--){

		divisores=0;

		for(numeroAnterior=numerosRecorridos-1;numeroAnterior>1;numeroAnterior--){

			if (numerosRecorridos%numeroAnterior==0) {
			divisores++;
			break;
		}
		}
		
		if (divisores==0) {
			console.log("es primo:" +numerosRecorridos);
		} 
	}



}//FIN DE LA FUNCIÓN