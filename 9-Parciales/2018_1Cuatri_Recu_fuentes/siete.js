function mostrar()
{

	var notaAlumno;
	var edadAlumno;
	var sexoAlumno;
	var cantidadAlumnos=1;
	var sumatoriaDeNotas=0;
	var notaMasBaja=11;
	var promedioNotas=0;
	var sexoDeLaNotaMasBaja;
	var alumnosMayoresAprobados=0;
	var edadMasBaja=100;
	var notaDelMasJoven;
	var sexoDelMasJoven;

	while(cantidadAlumnos <= 5){
			notaAlumno=prompt("Ingrese la nota del alumno: ");
			notaAlumno=parseInt(notaAlumno);
			while(notaAlumno<0 || notaAlumno>10){
				notaAlumno=prompt("Ingrese una nota válida: ");
				notaAlumno=parseInt(notaAlumno);
			}
			edadAlumno=prompt("Ingrese su edad: ");
			edadAlumno=parseInt(edadAlumno);
			while(edadAlumno<0 || edadAlumno>100){
				edadAlumno=prompt("Ingrese una edad válida: ");
				edadAlumno=parseInt(edadAlumno);
			}
			sexoAlumno=prompt("Indique si es f (femenino) o m (masculino): ");
			while(sexoAlumno != "f" && sexoAlumno != "m"){
				sexoAlumno=prompt("Indique un sexo válido: ");
			}
		
			cantidadAlumnos++;
	
			sumatoriaDeNotas=sumatoriaDeNotas+notaAlumno;

			if (notaAlumno < notaMasBaja) {
				notaMasBaja=notaAlumno;
				sexoDeLaNotaMasBaja=sexoAlumno;
			}

			if (edadAlumno >= 18 && notaAlumno >= 6 && sexoAlumno == "m") {
				alumnosMayoresAprobados++;
			}

			if (edadAlumno < edadMasBaja){
				edadMasBaja=edadAlumno;
				notaDelMasJoven=notaAlumno;
				sexoDelMasJoven=sexoAlumno;

			}


	}

	promedioNotas=sumatoriaDeNotas/cantidadAlumnos;

	alert("El promedio de notas es: "+promedioNotas);
	alert("La nota más baja fue: "+notaMasBaja+"("+sexoDeLaNotaMasBaja+")");
	alert("Varones mayores con nota >= 6 es de: "+alumnosMayoresAprobados);
	alert("Nota del más joven es: "+notaDelMasJoven+"("+sexoDelMasJoven+")");
}


/*
18 m 6
17 m 2
19 f 10
16 m  7
20 f 7
*/