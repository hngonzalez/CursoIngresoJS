function mostrar()
{
    var planeta;

    planeta = prompt("Ingrese un planeta: "); // pido el planeta

    switch (planeta) {  // valido si es un planeta de las opciones
        case "mercurio":
            document.getElementById('planeta').value = "Acá hace más calor";
            break;

        case "venus":
            document.getElementById('planeta').value = "  ";  
            break;

        case "tierra":
            document.getElementById('planeta').value = "Acá vivimos";
            break;

        case "marte":
            document.getElementById('planeta').value = "  ";   
            break;

        case "jupiter":
            document.getElementById('planeta').value = "  ";
            break;

        case "saturno":
            document.getElementById('planeta').value = "  ";
            break;

        case "urano":
            document.getElementById('planeta').value = "  ";
            break;

        case "neptuno":
            document.getElementById('planeta').value = "Acá hace más frio";
            break;
           
        default: //si no es una de las opciones, muestro mensaje
            document.getElementById('planeta').value = "Planeta no válido";
            break;
    }

}
