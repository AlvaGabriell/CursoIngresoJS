/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	let nombrePedido;
	let edadPedida;

	nombrePedido = document.getElementById("txtIdNombre").value;
	edadPedida = document.getElementById("txtIdEdad").value;



	alert("Usted se llama " + nombrePedido  + " y tiene " + edadPedida);
}

