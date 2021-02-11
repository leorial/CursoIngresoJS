/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

let precio1;
let precio2;
let precio3;
let iva;



function Sumar () 
{
    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
	alert(precio1+precio2+precio3);
}
function Promedio () 
{
	precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
    alert((precio1+precio2+precio3)/3)
}
function PrecioFinal () 
{
	precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
    iva=(precio1+precio2+precio3)*21/100;
    alert(precio1+precio2+precio3+iva);

}
