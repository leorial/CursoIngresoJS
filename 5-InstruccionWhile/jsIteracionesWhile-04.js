/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;
	num=prompt("ingrese numero entre 0 y 9");

	while (num>10 || num<0 )
	{
		num=prompt("ingrese numero entre 0 y 9");
	}
	document.getElementById("txtIdNumero").value = num;
	
}//FIN DE LA FUNCIÓN