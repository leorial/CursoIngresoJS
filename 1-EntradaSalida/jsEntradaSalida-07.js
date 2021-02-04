/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	let numero1;
    let numero2;
	let resultado;
	

function sumar()
{	
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);	
	
	resultado = numero1+numero2;

	alert("el resultado de la suma es: "+resultado);	
}

function restar()
{
    numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);	
	
	resultado = numero1 - numero2;
	alert("el resultado de la resta es: "+resultado);
}

function multiplicar()
{ 
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);	
	
	resultado = numero1 * numero2;
	alert("el resultado de la multiplicacion es: "+resultado);
}

function dividir()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);
	numero2 = document.getElementById("txtIdNumeroDos").value;
	numero2 = parseInt(numero2);	
	
	resultado = numero1 / numero2;
	alert("el resultado de la division es: "+resultado);
}

