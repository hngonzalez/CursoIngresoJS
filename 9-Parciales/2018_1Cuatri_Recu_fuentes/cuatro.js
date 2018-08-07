function mostrar()
{
  
  var numeroUno;
  var numeroDos; 
  var numerosSumados;
  var numerosDivididos;

  numeroUno=prompt("Se necesitan 2 numeros, cargue el primero número: ");
  numeroUno=parseInt(numeroUno);
  numeroDos=prompt("Ahora el segundo: ");
  numeroDos=parseInt(numeroDos);

  if (numeroUno == numeroDos) {
    alert("Números iguales, los muestro concatenados: "+numeroUno+numeroDos);
  } else if (numeroUno > numeroDos) {
    numerosDivididos=numeroUno/numeroDos;
    alert("El primero es mayor, los divido dando: "+numerosDivididos);
  } else if (numeroUno < numeroDos) {
    numerosSumados=numeroUno+numeroDos;
    if (numerosSumados < 50) {
      alert("La suma es "+numerosSumados+" y es menor a 50");
    }
    alert("El segundo es mayor, los sumo dando: "+numerosSumados);
  }


}
