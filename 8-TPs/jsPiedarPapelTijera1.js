/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionHumano;

function comenzar()
{
    eleccionMaquina = Math.floor(Math.random() * 3) + 1;


}//FIN DE LA FUNCIÓN
function piedra()
{
	if (eleccionHumano == 1 && eleccionMaquina == 3) {
        alert("El usuario resultó ganador")
    } else if (eleccionHumano == 1 && eleccionMaquina == 2){
    	
    } else if (eleccionHumano == 1 && eleccionMaquina == 1){
    	
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    if (eleccionMaquina == 2 && eleccionHumano == 1) {
        alert("El usuario resultó ganador")
    } else if (eleccionHumano == 2 && eleccionMaquina == 3){
    	
    } else if (eleccionHumano == 2 && eleccionMaquina == 2){
    	
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina == 3 && eleccionHumano == 2) {
        alert("El usuario resultó ganador")
    } else if (eleccionHumano == 3 && eleccionMaquina == 1){
    	
    } else if (eleccionHumano == 3 && eleccionMaquina == 3){
    	
    }

}//FIN DE LA FUNCIÓN
