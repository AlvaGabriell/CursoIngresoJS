/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);

	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numeroUno + numeroDos;

	alert("El resultado de la suma es " + resultado);

	
}

function restar()
{
	let restaUno;
	let restaDos;
	let resultado;

	restaUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	restaDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = restaUno - restaDos;


	alert("El resutado de la resta es " + resultado);



}

function multiplicar()
{ 

	let multiplicacionUno;
	let multiplicacionDos;
	let resultado;

	multiplicacionUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	multiplicacionDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = multiplicacionUno * multiplicacionDos;

	alert("El resultado de la multiplicacion es " + resultado);



	
}

function dividir()
{
	
	let divisionUno;
	let divisionDos;
	let resultado;

	divisionUno = parseInt(document.getElementById("txtIdNumeroUno").value);

	divisionDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = divisionUno / divisionDos;

	alert("El resultado de la division es " + resultado);



}

