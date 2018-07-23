/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var numeroRandomA;
var numeroRandomB;
var operacionMas;
var operacionResta;
var operacionMultiplicar;
var operacionDividir;
var respuesta;

function comenzar()
{

numeroRandomA = Math.floor(Math.random()*10)+1;
numeroRandomA = parseInt(numeroRandomA);
numeroRandomB = Math.floor(Math.random()*10)+1;
numeroRandomB = parseInt(numeroRandomB);

}

}//FIN DE LA FUNCIÓN
function Responder()
{

operacionMas = eval("numeroRandomA + numeroRandomB");
operacionResta = eval("numeroRandomA - numeroRandomB");
operacionMultiplicar = eval("numeroRandomA * numeroRandomB");
operacionDividir = eval("numeroRandomA + numeroRandomB");

}//FIN DE LA FUNCIÓN
