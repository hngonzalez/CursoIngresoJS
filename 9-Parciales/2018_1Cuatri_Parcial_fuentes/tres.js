function mostrar()
{

    var precioInicial;
    var porcenDescuento;
    var precioFinal;

    precioInicial = prompt("Ingrese el precio: ");
    porcenDescuento = prompt("Cargue el porcentaje de descuento: ");
    
    precioFinal = precioInicial - ((precioInicial * porcenDescuento) / 100);
    
    document.getElementById('elPrecioFinal').value = precioFinal;
    
    //El resultado me aparece como NaN
}
