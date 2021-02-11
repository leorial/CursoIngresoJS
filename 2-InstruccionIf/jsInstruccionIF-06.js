function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;

	if (edad<13)
	{
		alert("usted es un niño");
	}
	else if (edad>=13 && edad<=17)
	{
		alert("usted es adolescente");
	}
	else
	{
		alert("usted es mayor de edad")
	}




}//FIN DE LA FUNCIÓN