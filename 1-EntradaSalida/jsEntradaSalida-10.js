/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
    var importeA;
    var importeB;
    var importeC;

    importeA = document.getElementById('importe').value;
    
    importeB = parseInt(importeA,10);
    
    importeC = importeB - ((importeB * 10) /100);

    document.getElementById('resultado').value = importeC;

}
