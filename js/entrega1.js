
let var1;
let var2;

let nombre = prompt("¿Como te llamas?");
alert("Hola " + nombre);
let RESULTADO;

let respuesta = prompt("¿Me darías dos numeros para sumarlos?(Si/No)");

if (respuesta == "Si" || respuesta == "si"){
	var1 = Number(prompt("Primer número"));
	var2 = Number(prompt("Segundo número"));
	RESULTADO = var1 + var2;
	alert("Gracias! el resultado es " + RESULTADO);
}else if( respuesta == "No" || respuesta == "no"){
	RESULTADO = 0;
	alert("Esta bien :C");
}

//Entrega 1 Nicolas Soto