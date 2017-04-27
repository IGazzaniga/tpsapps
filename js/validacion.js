  function validar() {
    var letras = /^[A-Za-z]+$/;
    var x = $("input[name=nombre]").val();
    var y = 0;
    var mensaje;

    if (x == "" || !/^[a-zA-Z]*$/g.test(x)) {
        alert("El campo nombre no debe ser vacío ni contener números");
      }
      else{
        mensaje = "Nombre: "+x+"\n";
        y++;
       }
    
    var x = $("input[name=apellido]").val();

    if (x == "" || !/^[a-zA-Z]*$/g.test(x)) {
        alert("El campo apellido no debe ser vacío ni contener números");
      }
      else{
        mensaje = mensaje+"Apellido: "+x +"\n";
        y++;
      }

    var x = $("input[name=fecha]").val();

    if (x == "") {
        alert("Debe completar la fecha"); 
    }
    else{
      var f = x.toString();
      mensaje = mensaje+"Fecha: "+f+"\n";
      y++;
    }
    
    var x = $("input[name=sexo]:checked").val();
      if (x == undefined) {
        alert("Debe completar el sexo");
    }
    else{
      mensaje = mensaje+"Sexo: "+x+"\n";
      y++;
    }
    
    var x = $("input[name=valoracion]:checked").val();
      if (x == undefined) {
        alert("Debe completar la valoración");
    }
    else{
      mensaje = mensaje+"Valoracion: "+x;
      y++;
    }
    if (y==5){
    alert(mensaje);
    $("#formulario").fadeOut(1000);
    $("#oculto").fadeIn(1000);
    $("#oculto").fadeOut(5000);
    $("#formulario").fadeIn(6000);
    $('#formulario')[0].reset();

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