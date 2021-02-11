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

 
  cantidadarena=0;
  cantidadcal=0;
  cantidadcemento=0;
  preciocemento=0;
  preciocal=0;
  precioarena=0;
  
  
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
          precioarena=(precioarena+x)*a;
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
         preciocal=(preciocal+y)*ca;
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
        preciocemento=(preciocemento+z)*ce;
       }
       break;
    }






    seguir=prompt("desea ingresar otro articulo? s/n");
    if (seguir=="n")
    {
      break;
    }
  }
alert(cantidadcemento);
alert(preciocal);
alert(cantidadarena);

}
