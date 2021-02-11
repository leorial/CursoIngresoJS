/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let divisor;
	let suma;
	let acumulador;
	let repetidor;

	acumulador=0;
	divisor=0;
	repetidor="si";


	while (repetidor != "no")
	{
		numero=parseInt(prompt("ingrese un numero"));
		acumulador=acumulador+numero;
		divisor=divisor+1;
		repetidor=prompt("quiere agregar otro numero? si/no: ");
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/divisor;
	

}//FIN DE LA FUNCIÓN