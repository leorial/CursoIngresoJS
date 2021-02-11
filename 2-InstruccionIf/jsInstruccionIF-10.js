function mostrar()
{
let nota;
let random;

random=Math.random()*10;
nota=random.toFixed(0);

if (nota == 9 || nota == 10)
{
	alert("nota: " + nota + " EXCELENTE");
}
else if (nota>=4)
{
	alert("nota: " + nota + " APROBO");
}
else
{
	alert("nota: " + nota + " Vamos, la proxima se puede");
}
}//FIN DE LA FUNCIÓN