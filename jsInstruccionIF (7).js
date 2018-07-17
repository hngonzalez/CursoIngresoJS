function mostrar()
{
//tomo la edad  

    var edadPersona;

    edadPersona = document.getElementById('edad').value;    //Tomo la edad que se carga en el cuadro de texto
    edadPersona = parseInt(edadPersona);    //La transformo a entero porque el getElementById recibe datos de texto y no enteros

    if (edadPersona < 18) { //Valido que sea menor a 18

        if (document.getElementById('estadoCivil').value == "Soltero") { // Acá no se como cargar que sea distinto de "Soltero" por lo que le pongo que si es igual a Soltero nada pase

             
        } 
        else {

            alert("Es muy pequeño para NO ser soltero.");   //Si verifica que es menor pero no es igual a "Soltero" entonces muestra mensaje
            
        }
    }
	
    

}//FIN DE LA FUNCIÓN