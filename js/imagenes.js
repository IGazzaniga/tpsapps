var total;
function inicializa(){
	total = 0;
	$("#precio").html(total);
	console.log(total);
};
function opacidad(id){
	var fotos = $("#"+id);
	var foto = fotos[0];
	var op = foto.style.opacity;
	console.log(foto); 
	var suma = parseInt($("#precio").val());

	if(op !== "0.5"){
	
	foto.style.opacity = "0.5";

	suma = suma + 50;

	}

	else{
		foto.style.opacity = "1";
		suma = suma - 50;
	}

	$("#precio").html(suma);
}