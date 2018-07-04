function mostrar()
{

    var precioInicial;
    var porcenDescuento;
    var precioFinal;

    precioIinicial = prompt("Ingrese el precio: ");
    porcenDescuento = prompt("Cargue el porcentaje de descuento: ");
    
    precioFinal = precioInicial * porcenDescuento / 100;
    
    document.getElementById('elPrecioFinal').value = precioFinal;
    
    //El resultado me aparece como NaN
}
