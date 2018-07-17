function mostrar()
{

    var primerNumero;
    var segundoNumero;
    var numerosIguales;
    var numerosRestados;
    var numerosSumados;
    var mensaje;

    primerNumero = prompt("Cargue el primer numero: ");
    primerNumero = parseInt(primerNumero);
    segundoNumero = prompt("Ahora el segundo: ");
    segundoNumero = parseInt(segundoNumero);

    if (primerNumero == segundoNumero) {    //Valido si es igual
        numerosIguales = ""+primerNumero+segundoNumero;
        document.getElementById('elResultado').value = "Números concatenados: "+numerosIguales;      
    } else {
        if (primerNumero > segundoNumero) {     //Valido si el primer num es mayor al segundo
            numerosRestados = primerNumero - segundoNumero;
            document.getElementById('elResultado').value = "La resta es: "+numerosRestados;
        } else {      
            if (primerNumero < segundoNumero) {     //Valido si es menor al segundo
                numerosSumados = primerNumero + segundoNumero;
                if (numerosSumados > 10) {  //Si es menor, verifico que la suma sea mayor a 10
                    mensaje = "La suma es"+numerosSumas+" y superó el 10.";
                    document.getElementById('elResultado').value = mensaje;    
                }
                document.getElementById('elResultado').value = "La suma es: "+numerosSumados;
            } else {
            }
        }   
    }
}
