function mostrar()
{
//tomo la edad  

var edadPersona;

edadPersona = document.getElementById('edad').value;    //Tomo la edad que se carga en el cuadro de texto
edadPersona = parseInt(edadPersona);    //La transformo a entero porque el getElementById recibe datos de texto y no enteros

if (edadPersona < 18) { //Valido que sea menor a 18

    if (document.getElementById('estadoCivil').value != "Soltero") { 

         
    } 
}
else {

    if (document.getElementById('estadoCivil').value == "Soltero") { 

        alert("Es soltero y no es menor.");

    }

}


}//FIN DE LA FUNCIÓN