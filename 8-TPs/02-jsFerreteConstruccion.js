/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

let largo;
let ancho;
let radio;
let circunsferencia;
let superficie

function Rectangulo () 
{
    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);
    alert("metros de alambre: :"+(ancho*2+largo*2)*3);

}
function Circulo () 
{
    radio=parseInt(document.getElementById("txtIdRadio").value);
    diametro=radio*2;
    circunsferencia=3.14*diametro;
    alert("metros de alambre a comprar: "+circunsferencia*3);
    
}
function Materiales () 
{
    largo=parseInt(document.getElementById("txtIdLargo").value);
    ancho=parseInt(document.getElementById("txtIdAncho").value);
    superficie=largo*ancho;
    alert("se necesitan "+superficie/2 +" bolsas de cemento y "+superficie/3 +" bolsas de cal");
	
}