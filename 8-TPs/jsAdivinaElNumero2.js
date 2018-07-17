/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;
var numeroAVerificar;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = (Math.floor(Math.random() * 100)+1);
	document.getElementById('numero').value = "";
	document.getElementById('intentos').value = "";
	contadorIntentos = 0; 

}

function verificar()
{
   
	numeroAVerificar = document.getElementById('numero').value;
	numeroAVerificar = parseInt(numeroAVerificar);
	contadorIntentos = contadorIntentos + 1;
	document.getElementById('intentos').value = contadorIntentos;
  
	if (numeroAVerificar == numeroSecreto) {

		if (contadorIntentos == 1) {
			alert("usted es un Psíquico");			
		} else if (contadorIntentos == 2) {
			alert("excelente percepción");
			
		} else if (contadorIntentos == 3) {
			alert("Esto es suerte");
			
		} else if (contadorIntentos == 4) {
			alert("Excelente técnica");
		} else if (contadorIntentos == 5) {
			alert("usted está en la media");
		} else if (contadorIntentos >= 6 && contadorIntentos <= 10) {
			alert("falta técnica");
		} else if (contadorIntentos >= 11) {
			alert("afortunado en el amor!!");
		}
			
	} 
	
	else if (numeroAVerificar < numeroSecreto) {
		alert("Falta...");
	}
	else if (numeroAVerificar > numeroSecreto) {
		alert("Te pasaste...");
	}	

}