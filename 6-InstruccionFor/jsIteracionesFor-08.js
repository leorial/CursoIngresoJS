function mostrar()
{

let numero;
let divisores;

divisores=0;

numero=parseInt(prompt("ingrese un numero"));

for (let i = 1; numero>=i; i++)
{
	if (numero % i == 0)
	{
		divisores++;
	}
}
if (divisores>2)
{
	alert("numero no primo");
}
else
{
	alert("numero primo");
}

	

}//FIN DE LA FUNCIÓN