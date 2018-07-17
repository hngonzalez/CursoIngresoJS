/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidadLamparas;
     var marcaLampara;
     var iiBB;
     
     cantidadLamparas = document.getElementById('Cantidad').value;
     marcaLampara = document.getElementById('Marca').value;

     if (cantidadLamparas >=6) { // Comparo si la cantidad de lámparas son mayores o iguales a 6

        precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 50)/100);
        document.getElementById('precioDescuento').value = "$"+precioConDescuento;
         
     } 
     
     else {
         if (cantidadLamparas == 5 && marcaLampara == "ArgentinaLuz") { // Comparo si la cantidad de lámparas son 5

            precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 40)/100);
            document.getElementById('precioDescuento').value = "$"+precioConDescuento;
             
         } else {
            
            precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 30)/100);
            document.getElementById('precioDescuento').value = "$"+precioConDescuento;
             
         }
         
         if (cantidadLamparas == 4 && marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas") { // Comparo si la cantidad de lámparas son 4

            precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 25)/100);
            document.getElementById('precioDescuento').value = "$"+precioConDescuento;
             
         } else {

            precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 20)/100);
            document.getElementById('precioDescuento').value = "$"+precioConDescuento;
             
         }

         if (cantidadLamparas == 3 && marcaLampara == "ArgentinaLuz") { // Comparo si la cantidad de lámparas son 3

            precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 15)/100);
            document.getElementById('precioDescuento').value = "$"+precioConDescuento;
             
         } else {
             if ((cantidadLamparas == 3 && marcaLampara == "FelipeLamparas")) {

                precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 10)/100);
                document.getElementById('precioDescuento').value = "$"+precioConDescuento;
                 
             } else {

                precioConDescuento = (cantidadLamparas * 35) - (((cantidadLamparas * 35) * 5)/100);
                document.getElementById('precioDescuento').value = "$"+precioConDescuento;
                 
             }
             
         }

         if (precioConDescuento > 120) {

            iiBB = (precioConDescuento * 10)/100;
            document.getElementById('precioDescuento').value = "Usted pago $"+iiBB+" de IIBB";
             
         } else {
             
         }
         
     }
}
