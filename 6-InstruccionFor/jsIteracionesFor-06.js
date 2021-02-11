function mostrar()
{
	let numero;
	let pares;

	numero=parseInt(prompt("ingrese numero"));
	pares=0;
	
	for (let i = 0;numero>=i; i++)
	{
		if (i % 2 == 0)
		{
		pares++;
		alert(i);
		}
	}

	alert("cantidad de numeros pares: "+pares);
	



}//FIN DE LA FUNCIÓN