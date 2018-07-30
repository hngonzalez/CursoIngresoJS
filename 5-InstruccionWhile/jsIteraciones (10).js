function mostrar()
{

	var contador=0;
	var numero=0;
	var	sumNegativos=0;
	var	sumPositivos=0;
	var	cantNegativos=0;
	var	cantPositivos=0;
	var cantCeros=0;
	var cantPares=0;
	var promPositivos=0;
	var promNegativos=0;
	var difPosNeg=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		respuesta = prompt("Ingrese un número: (coloque 'no' para no ingresar más numeros)");
		numero = respuesta;
		numero = parseInt(numero);
		if (numero <0) {
				sumNegativos = sumNegativos + numero;
				cantNegativos++;
 
		} else if (numero >0) {
				sumPositivos = sumPositivos + numero;
				cantPositivos++;
		} else if (numero == 0) {
				cantCeros++;
		} else if (numero%2 == 0) {
				cantPares++;
		} 

		promPositivos = sumPositivos / cantPositivos;
		promNegativos = sumNegativos / cantNegativos;
		
		if (cantPositivos > cantNegativos) {
				difPosNeg = cantPositivos - cantNegativos;
		} else if (cantNegativos > cantPositivos) {
				difPosNeg = cantNegativos - cantPositivos;
		}

	}

document.write("Suma de Negativos: "+sumNegativos+"<br>Suma de Positivos: "+sumPositivos+"<br>Cantidad de Positivos: "+cantPositivos+"<br>Cantidad de Negativos: "+cantNegativos+"<br>Cantidad Ceros: "+cantCeros+"<br>Cantidad de Pares: "+cantPares+"<br>Promedio de Positivos: "+promPositivos+"<br>Promedio de Negativos: "+promNegativos+"<br>Diferencia entre Pos y Neg: "+difPosNeg);




}//FIN DE LA FUNCIÓN