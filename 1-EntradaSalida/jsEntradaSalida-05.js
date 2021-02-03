//Ejercicio 5 bis

/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
function mostrar()*/

/*
bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"
*/

function mostrar()
{	
	let apellidoPedido;
	let nombrePedido;
	let edadPedida;
	
	
	apellidoPedido = prompt("Ingrese apellido");
	
	nombrePedido = document.getElementById("txtIdNombre").value;
	
	edadPedida = document.getElementById("txtIdEdad").value;


	alert(apellidoPedido + ", Usted se llama " + nombrePedido  + " y tiene " + edadPedida);
}
	



