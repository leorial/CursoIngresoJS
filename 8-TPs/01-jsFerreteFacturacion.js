/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

let precio1;
let precio2;
let precio3;
let resultado;
let iva;

function Sumar () 
{
    precio1=document.getElementById("txtIdPrecioUno").value;
    precio1=parseInt(precio1);
    precio2=document.getElementById("txtIdPrecioDos").value;
    precio2=parseInt(precio2);
    precio3=document.getElementById("txtIdPrecioTres").value;
    precio3=parseInt(precio3);
    resultado=precio1+precio2+precio3;
    
    alert(resultado);
}
function Promedio () 
{
    precio1=document.getElementById("txtIdPrecioUno").value;
    precio1=parseInt(precio1);
    precio2=document.getElementById("txtIdPrecioDos").value;
    precio2=parseInt(precio2);
    precio3=document.getElementById("txtIdPrecioTres").value;
    precio3=parseInt(precio3);
    resultado=(precio1+precio2+precio3)/3;
    
    alert(resultado);
}
function PrecioFinal () 
{
    precio1=document.getElementById("txtIdPrecioUno").value;
    precio1=parseInt(precio1);
    precio2=document.getElementById("txtIdPrecioDos").value;
    precio2=parseInt(precio2);
    precio3=document.getElementById("txtIdPrecioTres").value;
    precio3=parseInt(precio3);
    resultado=precio1+precio2+precio3;
    iva=resultado*21/100;
    
    alert(resultado+iva);


}