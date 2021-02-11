/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let negativos;
	let positivos;
	let positivosing;
	let negativosing;
	let pares;
	let seguir;
	let promediopositivos;
	let promedionegativos;
	let ceros;
	let diferencia;

	ingresados=0;
	negativos=0
	positivos=0;
	negativosing=0;
	positivosing=0;
	pares=0;
	ceros=0;
	
	do
	{
		numero=parseInt(prompt("ingrese numero"));
		if(numero>0)
		{
			positivos=positivos+numero;
			positivosing++;
		}
		else if(numero<0)
		{
			negativos=negativos+numero
			negativosing++;
		}
		else
		{
			ceros++;
		}
		if (numero % 2 == 0)
		{
			pares++;
		}

		seguir=prompt("desea ingresar otro numero? s/n");
	}while (seguir=="s");

	promedionegativos=negativos/negativosing;
	promediopositivos=positivos/positivosing;
	diferencia=positivos-negativos;

	document.write("suma de negativos: "+negativos);
	document.write("suma de positivos: "+positivos);
	document.write("cantidad de positivos: "+positivosing);
	document.write("cantidad de negativos: "+negativosing);
	document.write("cantidad de ceros: "+ceros);
	document.write("cantidad de numeros pares: "+pares);
	document.write("promedio de positivos: "+promediopositivos);
	document.write("promedio negativos: "+promedionegativos)
	document.write("dif. entre positivos y negativos: "+diferencia);
}//FIN DE LA FUNCIÓN