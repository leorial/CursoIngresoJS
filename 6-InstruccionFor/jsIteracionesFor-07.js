function mostrar()
{

let numero;
let divisores;

divisores=0;
numero=parseInt(prompt("ingrese un numero"));

for (let i=1; numero>=i; i++)
{
	if (numero % i == 0)
	{
		divisores++;
		alert(i);
	}
}
alert("la cantidad e divisores es: "+divisores);


}//FIN DE LA FUNCIÓN