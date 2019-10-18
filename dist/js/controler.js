//1ra forma de crearlos
var myCar= new Object();

myCar.marca= "Ford";
myCar.modelo= "Mustang";
myCar.año= 1969;

//2ra forma de crearlos
var myCar2= new Object();

myCar2["marca"]= "Ford";
myCar2["modelo"]= "Mustang";
myCar2["año"]= 1969;

//Su ventaja mostrada a continuación
var miObjeto = new Object(),
    cadena = "miCadena",
    aleatorio = Math.random(),
    objeto = new Object();

miObjeto.type                 = "Sintaxis con punto";
miObjeto["Fecha de creación"] = "Cadena con espacios y acento";
miObjeto[cadena]              = "String value";
miObjeto[aleatorio]           = "Número Aleatorio";//El numero será convertido en string, gracias a los corchetes.
miObjeto[objeto]              = "Objeto";// LLama al método obj.toString() y usará el resultado para la nueva clave
miObjeto[""]                  = "Incluso una cadena vacía";

console.log(miObjeto);

//Definir nombre a travez de variables
var nombrePropiedad = "marca";
miAuto[nombrePropiedad] = "Ford";

nombrePropiedad = "modelo";
miAuto[nombrePropiedad] = "Mustang";

///////////////////////////////////

const obj ={
    rabbit:"",
    year:1984,
}