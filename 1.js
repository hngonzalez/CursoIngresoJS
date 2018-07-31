/*
Jose M 25
Maria F 16
Jesus M 33
Fer F 81

valido f o m
si es 0 o 100
*/
function mostrar()
{

	var	nombre;
	var sexo;
	var edad;
	var contador=0;
	var contadorMujeres=0;
	var contadorHombres=0;
	var cantidadMayoresDeEdad=0;
	var cantidadMenoresDeEdad=0;
	var edadMasBaja=0;
	var edadMasAlta=0;
	var promedioEdadHombres=0;
	var promedioEdadMujeres=0;
	var promedioEdadTotal=0;
	var sumaEdadMujeres=0;
	var sumaEdadHombres=0;

	while(contador < 4){

		contador++;

		nombre = prompt("Ingrese el nombre: ");

		sexo = prompt("Indique sexo (f o m): ");
		while(sexo!="f"&&sexo!="m"){
			sexo = prompt("Indique sexo (f o m): ");
		}

		edad=prompt("Aclare la edad: ");
		edad=parseInt(edad);
		while(isNaN(edad)||edad<0||edad>100){
			edad=prompt("Aclare la edad: ");
			edad=parseInt(edad);
		}

		if (sexo == "f") {
			contadorMujeres++;
			sumaEdadMujeres=sumaEdadMujeres+edad;
		} else {
			contadorHombres++;
			sumaEdadHombres=sumaEdadHombres+edad;
		}

		if (edad >= 18) {
			cantidadMayoresDeEdad++;
		} else {
			cantidadMenoresDeEdad++;
		}

		if (edad < edadMasBaja) {
			edadMasBaja = edad;
		} else if (edad > edadMasAlta) {
			edadMasAlta = edad;
		}
		

	}

	promedioEdadMujeres = sumaEdadMujeres / contadorMujeres;
	promedioEdadHombres = sumaEdadHombres / contadorHombres;
	promedioEdadTotal = (sumaEdadHombres + sumaEdadMujeres) / (contadorHombres + contadorMujeres);

	document.write("Cantidad de Mujeres --> "+contadorMujeres);
	document.write("<br>Cantidad de Hombres --> "+contadorHombres);
	document.write("<br>Cantidad de Hombres --> "+cantidadMayoresDeEdad);
	document.write("<br>Cantidad de Hombres --> "+cantidadMenoresDeEdad);


}
