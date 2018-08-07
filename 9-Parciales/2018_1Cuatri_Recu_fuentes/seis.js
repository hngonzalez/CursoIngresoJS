function mostrar()
{

	var nota;
	var mensaje;

	nota=document.getElementById('laHora').value;
	nota=parseInt(nota);

	switch(nota){
		case 0:
		case 1:
		case 2:
		case 3:
			mensaje="la próxima se puede";
			break;
		case 4:
		case 5:
		case 6:
			mensaje="raspando";
			if (nota <= 5) {
				mensaje="debès preocuparte más";
			}
			break;
		default:
			mensaje="aprobó";
			if (nota >= 8) {
				mensaje="muy bien";
			}
			break;
		
	}

	alert(mensaje);

}
