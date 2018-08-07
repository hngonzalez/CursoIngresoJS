function mostrar()
{

	var diaSemana;
	var	mensaje;

	diaSemana=prompt("Cargue un dia de la semana: ");

	switch(diaSemana){
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="a trabajar";
			break;
		case "sabado":
		case "domingo":
			mensaje="buen finde";
			break;

		default:
			mensaje="Dia no válido";
			break;
	}

	alert(mensaje);

}
