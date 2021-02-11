function mostrar()
{
let numero;
let acumulador;
let i;

acumulador=0;
i=0;

while (i<5)
{
	numero=parseInt(prompt("ingrese numero"));
	acumulador=acumulador+numero;
	i=i+1
}

document.getElementById("txtIdSuma").value=acumulador;
document.getElementById("txtIdPromedio").value=acumulador/5;

}//FIN DE LA FUNCIÓN