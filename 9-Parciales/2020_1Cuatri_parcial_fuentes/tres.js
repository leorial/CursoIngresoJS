function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadocivil;
	let temperatura;
	let t; // mayor temperatura
	let n; //nombre con mas temperatura
	let v; //hombre mayores de edad viudos
	let h; //cantidad de hombre solteros o viudos
	let x; //ancianos con mas de 38 grados
	let s; //cantidad de hombres
	let e; //edad de hombres
	let promedio;

	t=0;
	v=0;
	h=0;
	x=0;
	s=0;
	e=0;


	for (; ;)
	{
		nombre=prompt("ingrese nombre:");
		
		edad=parseInt(prompt("ingrese edad:"));


		sexo=prompt("ingrese sexo: m/f");
		
		estadocivil=prompt("ingrese estado civil: soltero/casado/viudo");

		temperatura=parseInt(prompt("ingrese temperatura en grados:"));
		if (temperatura>t)
		{
			t=temperatura;
			n=nombre;
		}

		if (temperatura>38 && edad>60)
		{
			x++;
		}

		if (sexo=="m" && estadocivil=="soltero")
		{
			s++;
			e=e+edad;
		}

		if (estadocivil == "viudo" && edad>=18)
		{
			v++;
		}

		if (estadocivil != "casado" && sexo=="m")
		{
			h++
		}

		
		let seguir=prompt("desea ingresar otro pasajero? s/n");
		if (seguir != "s")
		{
			break;
		}
	}
	promedio=e/s;
	alert("la persona con mas temperatura es: "+n);
	alert("hay "+v+" mayores de edad viudos");
	alert("hay "+h+" soltero o viudos");
	alert("hay "+x+" mayores de edad con mas de 38 grados");
	alert("hla edad promedio de hombre solteros es de "+promedio);




}
