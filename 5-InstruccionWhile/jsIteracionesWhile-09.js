/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
     let numero;
	 let maximo;
	 let minimo;
	 let seguir;
	 let flag = 0;

	 do
	 {
		numero=parseInt(prompt("ingrese un numero"));

		if (flag == 0)
		{
			maximo=numero;
			minimo=numero;
			flag = 1;
		}
		
		if (numero>maximo)
		{
			maximo=numero;
		}
		else if (numero<minimo)
		{
			minimo=numero;
		}
	
		
		seguir=prompt("desea ingresar otro numero? s/n");
	 }while (seguir=="s");

	document.getElementById("txtIdMaximo").value=maximo;
	document.getElementById("txtIdMinimo").value=minimo;

}