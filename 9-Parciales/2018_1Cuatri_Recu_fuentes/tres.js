function mostrar()
{

	var precio;
	var	porcenDesc;
	var montoDesc;
	var iva;
	var	montoConIva;
	var precioFinal;

	precio = prompt("Ingrese el precio: ");
	porcenDesc = prompt("Ingrese el descuento: ");

	montoDesc = (precio * porcenDesc) / 100;

	montoSinIva = precio - montoDesc;

	iva = (montoSinIva * 21) / 100;

	precioFinal = montoSinIva + iva;

	alert("El descuento en dinero es "+montoDesc+", el precio con el descuento seria "+montoSinIva+" con un IVa de "+iva);

	document.getElementById('elPrecioFinal').value = precioFinal;

}
