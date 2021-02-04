/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

let largo;
let ancho;
let radio;
let perimetro;
let diametro;
let circunferencia;
let superficie;
let cemento;
let cal;

function Rectangulo () 
{
    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);
    perimetro=(ancho*2)+(largo*2);

    alert(perimetro*3 + " Metros de alambre.")
}
function Circulo () 
{   
    radio=document.getElementById("txtIdRadio").value;
    radio=parseInt(radio);
    diametro=radio*2;
    circunferencia=diametro*3.14

    alert(circunferencia + " Metros de alambre.")
}
function Materiales () 
{
    largo=document.getElementById("txtIdLargo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("txtIdAncho").value;
    ancho=parseInt(ancho);
    superficie=largo*ancho;
    cemento=2
    cal=3

    alert("se necesitaran " + superficie*cemento + " bolsas de cemento y " + superficie*cal + " bolsas de cal." );

}