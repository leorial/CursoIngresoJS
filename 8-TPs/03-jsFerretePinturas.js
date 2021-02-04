/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

let cen; //centigrados o celsius
let far; //farenheit

function FahrenheitCentigrados () 
{
    far=document.getElementById("txtIdTemperatura").value;
    far=parseInt(far);
    cen=(far-32)*(5/9);

    alert(far + " grados farenheit son " + cen + " grados centigrados");
}

function CentigradosFahrenheit () 
{
    cen=document.getElementById("txtIdTemperatura").value;
    cen=parseInt(cen);
    far=cen*(9/5)+32;

    alert(cen + " grados centigrados son " + far + " grados farenheit");
}
