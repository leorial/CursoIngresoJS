/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let positivo;
	let negativo;
	let seguir;

	positivo=0;
	negativo=1;


	do
	{
		numero=parseInt(prompt("ingrese un numero"));
		if (numero>0)
		{
			positivo=positivo+numero;
		}
		else (numero<0)
		{
			negativo=negativo*numero;
		}


		seguir=prompt("quiere ingresar otro numero? s/n");
	}	while (seguir=="s")

	document.getElementById("txtIdSuma").value=positivo;
	document.getElementById("txtIdProducto").value=negativo;


}//FIN DE LA FUNCIÓN