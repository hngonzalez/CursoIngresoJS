/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

    sumaX = x1Int+x2Int;

    alert("La suma es: "+sumaX);

}

function restar()
{
	    
    var x1;
    var x2;
    var x1Int;
    var x2Int;
    var restaX;

    x1 = document.getElementById('numeroUno').value;
    x2 = document.getElementById('numeroDos').value;

    x1Int = parseInt(x1,10);
    x2Int = parseInt(x2,10);

    restaX = x1Int-x2Int;

    alert("La resta es: "+restaX);

}

function multiplicar()
{ 
		    
    var x1;
    var x2;
    var x1Int;
    var x2Int;
    var multiX;

    x1 = document.getElementById('numeroUno').value;
    x2 = document.getElementById('numeroDos').value;

    x1Int = parseInt(x1,10);
    x2Int = parseInt(x2,10);

    multiX = x1Int*x2Int;

    alert("La multiplicación es: "+multiX);

}

function dividir()
{
			    
    var x1;
    var x2;
    var x1Int;
    var x2Int;
    var divX;

    x1 = document.getElementById('numeroUno').value;
    x2 = document.getElementById('numeroDos').value;

    x1Int = parseInt(x1,10);
    x2Int = parseInt(x2,10);

    divX = x1Int/x2Int;

    alert("La división es: "+divX);

}

