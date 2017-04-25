function inicializa(){
	var total = 0;
	document.getElementById("precio").innerHTML = total;
}

function opacidad(id){
	var x = document.getElementById(id).style.opacity;
	var suma = parseInt(document.getElementById("precio").value);

	if(x !== "0.5"){
	
	document.getElementById(id).style.opacity = "0.5";

	suma = suma + 50;
	}

	else{
		document.getElementById(id).style.opacity = "1";
		suma = suma - 50;
	}

	document.getElementById("precio").innerHTML = suma;
}
