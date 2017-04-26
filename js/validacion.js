/*function validar() {
	var letras = /^[A-Za-z]+$/;
    var x = document.forms["formulario"]["nombre"].value;
    var mensaje;

    if (x == "" || !/^[a-zA-Z]*$/g.test(x)) {
        alert("El campo nombre no debe ser vacío ni contener números");
      }
      else{
      	mensaje = "Nombre: "+x+"\n";
       }
    
    var x = document.forms["formulario"]["apellido"].value;

    if (x == "" || !/^[a-zA-Z]*$/g.test(x)) {
        alert("El campo apellido no debe ser vacío ni contener números");
      }
      else{
      	mensaje = mensaje+"Apellido: "+x +"\n";
      }

    var x = document.forms["formulario"]["fecha"].value;

    if (x == "") {
        alert("Debe completar el fecha");	
    }
    else{
    	var f = x.toString();
    	mensaje = mensaje+"Fecha: "+f+"\n";
    	
    }

    var x = document.forms["formulario"]["sexo"].value;

    if (x == "") {
        alert("Debe completar el sexo");
    }
    else{
    	mensaje = mensaje+"Sexo: "+x+"\n";

    }
    
    var x = document.forms["formulario"]["valoracion"].value;

    if (x == "") {
        alert("Debe completar el valoración");
    }
    else{
    	mensaje = mensaje+"Valoracion: "+x;
    	alert(mensaje);
    }

    return false;

    

  }

  function cancelar(){
  	var r = confirm("¿Desea cancelar? Si lo hace, volvera al inicio. Pulse OK para cancelar o Cancelar para deshacer");
    if (r == true) {
    	window.location.href = './index.html';
        
    } else {
        
    }
  }
*/
  function validar() {
  var letras = /^[A-Za-z]+$/;
    var x = document.forms["formulario"]["nombre"].val();
    var mensaje;

    if (x == "" || !/^[a-zA-Z]*$/g.test(x)) {
        alert("El campo nombre no debe ser vacío ni contener números");
      }
      else{
        mensaje = "Nombre: "+x+"\n";
       }
    
    var x = document.forms["formulario"]["apellido"].val();

    if (x == "" || !/^[a-zA-Z]*$/g.test(x)) {
        alert("El campo apellido no debe ser vacío ni contener números");
      }
      else{
        mensaje = mensaje+"Apellido: "+x +"\n";
      }

    var x = document.forms["formulario"]["fecha"].val();

    if (x == "") {
        alert("Debe completar el fecha"); 
    }
    else{
      var f = x.toString();
      mensaje = mensaje+"Fecha: "+f+"\n";
      
    }

    var x = document.forms["formulario"]["sexo"].val();

    if (x == "") {
        alert("Debe completar el sexo");
    }
    else{
      mensaje = mensaje+"Sexo: "+x+"\n";

    }
    
    var x = document.forms["formulario"]["valoracion"].val();

    if (x == "") {
        alert("Debe completar el valoración");
    }
    else{
      mensaje = mensaje+"Valoracion: "+x;
      alert(mensaje);
    }

    return false;

    

  }

  function cancelar(){
    var r = confirm("¿Desea cancelar? Si lo hace, volvera al inicio. Pulse OK para cancelar o Cancelar para deshacer");
    if (r == true) {
      window.location.href = './index.html';
        
    } else {
        
    }
  }