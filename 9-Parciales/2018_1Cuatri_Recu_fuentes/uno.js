
function mostrar()
{

	var baseTriangulo;
	var alturaTriangulo;
	var superficieTriangulo;
	var perimetroTriangulo;

	baseTriangulo = prompt("Ingrese la base del triángulo equilátero: ");
	baseTriangulo=parseInt(baseTriangulo);
	alturaTriangulo = prompt("Ahora cargue su altura: ");
	alturaTriangulo=parseInt(alturaTriangulo);

	superficieTriangulo=baseTriangulo*alturaTriangulo;
	perimetroTriangulo=baseTriangulo*3;

	alert("La superficie del triángulo es "+superficieTriangulo+" y su perímetro "+perimetroTriangulo);


}
