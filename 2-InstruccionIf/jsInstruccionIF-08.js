function mostrar()
{
	let edad;
	let estadocivil;

	edad=document.getElementById("txtIdEdad").value;
	estadocivil=document.getElementById("estadoCivil").value;

	if (edad<18 && estadocivil!="Soltero")
	{
	}
	else if (edad>18 && estadocivil=="Soltero")
	{
		alert("Es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN