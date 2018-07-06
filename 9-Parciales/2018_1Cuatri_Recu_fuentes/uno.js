
function mostrar()
{

	var baseTriangulo;
	var alturaTriangulo;
	var	superficieTriangulo;
	var perimetroTriangulo;

	baseTriangulo = prompt("Cargar la base del triangulo: ");
	alturaTriangulo = prompt("Cargar la altura del triangulo: ");

	superficieTriangulo = (baseTriangulo * alturaTriangulo)/2;

	perimetroTriangulo = baseTriangulo*3;

	alert("La superficie del triangulo es "+superficieTriangulo+" y su perimetro "+perimetroTriangulo);

}
