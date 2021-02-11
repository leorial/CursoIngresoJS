/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo=prompt("F para femenino o M para Masculino");

	while (sexo!="F" && sexo!="M")
	{
		sexo=prompt("F para femenino o M para Masculino");
	}

	document.getElementById("txtIdSexo").value=sexo;
	
}//FIN DE LA FUNCIÓN