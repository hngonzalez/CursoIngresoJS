/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
/*
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
*/

    var numeroUno;
    var numeroDos;
    var resultado;

    //control d para cambiar varias variables
    //prompt y getElement devuelven textos y por esto tendría que pasarlo a entero con el parseInt
    //no hace falta crear otra variable x1Int para guardar el entero, puedo guardarlo en la misma var
    numeroUno = document.getElementById('numeroUno').value;
    numeroUno = parseInt(numeroUno);

    numeroDos = document.getElementById('numeroDos').value;
    numeroDos = parseInt(numeroDos);
        

    resultado = numeroUno + numeroDos;

    alert(resultado);
}

