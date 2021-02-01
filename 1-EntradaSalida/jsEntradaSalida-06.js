/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	let primerNumero;
	let segundoNumero;
	let resultado;

	//aglomerar toda la sentencia dentro del parentesis de conversion parse
	
	
	primerNumero = parseInt(document.getElementById("txtIdNumeroUno").value);  
	 
	segundoNumero = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = primerNumero + segundoNumero;


	// resultado = parseInt(primerNumero) + parseInt(segundoNumero);  metodologia opcional


	alert ("La suma es " + resultado);





}

