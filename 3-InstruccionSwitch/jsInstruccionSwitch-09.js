function mostrar()
{

	let destino;
	let estacion;
	let precio;
	let porcentaje10;
	let porcentaje20;
	let descuento10;
	let descuento20;
	let aumento10;
	let aumento20;
	


	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById("txtIdEstacion").value;
	precio=15000;
	porcentaje10=precio*10/100;
	porcentaje20=precio*20/100;
	descuento10=precio-porcentaje10;
	descuento20=precio-porcentaje20;
	aumento10=precio+porcentaje10;
	aumento20=precio+porcentaje20;
	

	switch (estacion)
	{
		case "Invierno" :

			switch (destino)
			{
				case "Bariloche" :
					alert("aumento del 20% precio: "+aumento20);
					break;

				case "Cataratas" :
					alert("descuento del 10% precio: "+descuento10);
					break;

				case "Cordoba" :
					alert("descuento del 10% precio: "+descuento10);
					break; 

				case "Mar del Plata" :
					alert("descuento del 20% precio: "+descuento20);
					break; 
			}
			break;

		case "Verano" :

			switch (destino)
			{
				case "Bariloche" :
					alert("descuento del 20% precio: "+descuento20);
					break; 

				case "Cataratas" :
					alert("aumento del 10% precio: "+aumento10);
					break;

				case "Cordoba" :
					alert("aumento del 10% precio: "+aumento10);
					break;

				case "Mar del Plata" :
					alert("aumento del 20% precio: "+aumento20);
					break;
			}
			break;

		case "Otoño" :

			switch (destino)
			{
				case "Bariloche" :
					alert("aumento del 10% precio: "+aumento10);
					break;

				case "Cataratas" :
					alert("aumento del 10% precio: "+aumento10);
					break;

				case "Cordoba" :
					alert("sin aumento: "+precio);
					break;

				case "Mar del Plata" :
					alert("aumento del 10% precio: "+aumento10);
					break;
			}
			break;

			case "Primavera" :

				switch (destino)
				{
					case "Bariloche" :
						alert("aumento del 10% precio: "+aumento10);
						break;
	
					case "Cataratas" :
						alert("aumento del 10% precio: "+aumento10);
						break;
	
					case "Cordoba" :
						alert("sin aumento: "+precio);
						break;
	
					case "Mar del Plata" :
						alert("aumento del 10% precio: "+aumento10);
						break;
				}
				break;
	}

	

}//FIN DE LA FUNCIÓN