function mostrar()
{
  let tipo;
  let precioarena;
  let preciocal;
  let preciocemento;
  let cantidadarena;
  let cantidadcal;
  let cantidadcemento;
  let a;
  let x;
  let ca;
  let y;
  let ce;
  let z;
  let bolsastotal;
  let preciototal;

 
  cantidadarena=0;
  cantidadcal=0;
  cantidadcemento=0;
  preciocemento=0;
  preciocal=0;
  precioarena=0;
  bolsastotal=0;
  
  
  for(; ;)
  {

    tipo=prompt("ingrese tipo de producto arena/cal/cemento");

    switch (tipo)
    {
      case "arena":
        a=prompt("ingrese cantidad de bolsas");
        a=parseFloat(a);
        cantidadarena=cantidadarena+a;
        x=prompt("ingrese precio por bolsa");
        x=parseFloat(x);
       if (x>0)
        {
          precioarena=precioarena+(x*a);
        }
       break;

      case "cal":
        ca=prompt("ingrese cantidad de bolsas");
        ca=parseFloat(ca);
        cantidadcal=cantidadcal+ca;
        y=prompt("ingrese precio por bolsa");
        y=parseFloat(y)
       if (y>0)
       {
         preciocal=preciocal+(y*ca);
       }
       break;

      case "cemento":
        ce=prompt("ingrese cantidad de bolsas");
        ce=parseFloat(ce);
        cantidadcemento=cantidadcemento+ce;
        z=prompt("ingrese precio por bolsa");
        z=parseFloat(z);
       if (z>0)
       {
        preciocemento=preciocemento+(z*ce);
       }
       break;
    }
  
    seguir=prompt("desea ingresar otro articulo? s/n");
    if (seguir=="n")
    {
      break;
    }
  }

bolsastotal=cantidadcemento+cantidadcal+cantidadarena;
preciototal=preciocemento+preciocal+precioarena;

alert("el importe a pagar bruto es: "+preciototal);

if (bolsastotal>30)
{
  preciototal=preciototal-(preciototal*25/100);
  alert("precio total con 25% de descuento: "+preciototal);
}
else if (bolsastotal>10)
{
  preciototal=preciototal-(preciototal*15/100);
  alert("precio total con 15% de descuento: "+preciototal);
}


if (cantidadcemento>cantidadarena && cantidadcemento>cantidadcal)
{
  alert("hay mas catidad de bolsas de cemento");
}
else if (cantidadcal>cantidadarena && cantidadcal>cantidadcemento)
{
  alert("hay mas cantidad de bolsas de cemento");
}
else
{
  alert("hay mas cantidad de bolsas de arena");
}

if (preciocemento>preciocal && preciocemento>precioarena)
{
  alert("las bolsas de cemento son las mas caras");
}
else if (preciocal>preciocemento && preciocal>precioarena)
{
  alert("las bolsas de cal son las mas caras");
}
else
{
  alert("las bolsas de arena son las mas caras");
}

}
