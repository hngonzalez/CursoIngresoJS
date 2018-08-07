function mostrar()
{

	var precioProducto;
	var porcentajeDescuento;
	var valorDelDescuento;
	var precioConDescuento;
	var iva;
	var precioFinal;

	precioProducto=prompt("Ingrese el precio: ");
	precioProducto=parseInt(precioProducto);
	porcentajeDescuento=prompt("Ingrese el número del porcentaje de descuento: ");
	porcentajeDescuento=parseInt(porcentajeDescuento);

	//Calculo el monto del descuento
	valorDelDescuento=(precioProducto*porcentajeDescuento)/100;
	//Calculo el precio con descuento
	precioConDescuento=precioProducto-valorDelDescuento;
	//Calculo el IVA
	iva=(precioConDescuento*21)/100;
	//Calculo el precio final
	precioFinal=precioConDescuento+iva;

	//MUestro por alert los valores
	alert("El valor del descuento es de "+valorDelDescuento+"%, el precio con el descuento es de $"+precioConDescuento+" y un IVA de $"+iva);

	//Cargo valor al ID
	document.getElementById('elPrecioFinal').value="El precio final es $"+precioFinal;

}
