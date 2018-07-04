/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    var x1;
    var x2;
    var x1Int;
    var x2Int;
    var sumaX;

    x1 = document.getElementById('numeroUno').value;
    x2 = document.getElementById('numeroDos').value;
    
    x1Int = parseInt(x1,10);
    x2Int = parseInt(x2,10);

    sumaX = x1Int + x2Int;

    alert("Resultado: "+sumaX);

}

