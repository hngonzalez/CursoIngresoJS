/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var sueldoA;
    var sueldoB;
    var sueldoC;

    sueldoA = document.getElementById('sueldo').value;
    
    sueldoB = parseInt(sueldoA,10);
    
    sueldoC = ((sueldoB * 10) /100) + sueldoB;

    document.getElementById('resultado').value = sueldoC;

}
