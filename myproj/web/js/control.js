$(document).ready(function() {	
	$(document).on("blur", '[data-toggle="email-bar"]', function(e) {
		var text=$(this).val();
    	validarEmail(text);
  	});
  	$(document).on("click", '[data-toggle="guardar-bar"]', function(e) {
		guardarInfo();
  	});
  	//validacion para que solo se ingrese numeros de 0 al 9
  	$('.solo-numero').keyup(function (){
        this.value = (this.value + '').replace(/[^0-9]/g, '');
    });
});

function guardarInfo(){
	//optener todo los datos del formulario
	var texto=$("#frmProducto").serialize();
	mensaje=$("#Mensaje").val();
	mensaje=mensaje.replace(/(<([^>]+)>)/ig,"");//limpiar html del texarea
	//validamos los input requeridos
	if (validatefrm()) {
		url='ajax_frmtest';
	    $.ajax({
	       	type:'POST',
	        url: url,
	        dataType:'JSON',
	        data:texto+'&Mensaje='+mensaje,
	        beforeSend: function(){
	        	ht='Cargaando...';
	            $(".mensajeGlobal").css('display','block').find('.alert-dismissible').text(ht)
	        },
	    }).done(function( data, textStatus, jqXHR ){ 
	    	$(".mensajeGlobal").css('display','block').find('.alert-dismissible').text('Registro Guardado').show(300).delay(3000).hide(300);
	    	document.getElementById('frmProducto').reset();
	    }).fail(function(jqXHR, ajaxOptions, thrownError){
	        $(".mensajeGlobal").css('display','block').find('.alert-dismissible').text('No se cargo la Información '+thrownError).show(300).delay(3000).hide(300);
	    });
	    $(".form-group").removeClass("has-error");
	}
}
	//valida correo 
	function validarEmail(tex) { 
		if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(tex)){ 
			$("#Email").parent().removeClass("has-error");
		} else { 
			$("#emailms").css('display','block').text('Correo Incorrecto').show(300).delay(3000).hide(300);
			$("#Email").parent().addClass("has-error");
		} 
	}
	function validatefrm(){
		//realizamos validacion de nombre espacio si solo se escri.. espacios 
		var Nombre=$("#Nombre");
		if(Nombre.val() == "" || /^\s*$/.test(Nombre.val())){
			Nombre.focus().parent().addClass("has-error");
			$("#nombrems").css('display','block').text('Tiene que Ingresar Nombre').show(300).delay(3000).hide(300);
	      	return false;
	      }
		if (validarNombre(Nombre.val())==false) {
			$('#Nombre').focus().parent().addClass("has-error");
			$("#nombrems").css('display','block').text('Nombre: recibe únicamente letras, espacios, sin tildes ni caracteres especiales').show(300).delay(3000).hide(300);
		     return false;	
		}
		//validacion de correo
		email=$("#Email");
		if(email.val() == "" || /^\s*$/.test(email)){
			$("#emailms").css('display','block').text('Correo Incorrecto').show(300).delay(3000).hide(300);
			email.parent().addClass("has-error").focus();
		    return false;
		}

		if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){ 
			$("#emailms").css('display','block').text('Correo Incorrecto').show(300).delay(3000).hide(300);
			email.parent().addClass("has-error");
			return false;
		}

		if($("#Telefono").val() == "" || /^\s*$/.test($("#Telefono").val())){
			$('#Telefono').parent().addClass("has-error").focus();
	      return false;
	  }

		if($("#Mensaje").val() == "" || /^\s*$/.test($("#Mensaje").val())){
			$('#Mensaje').parent().addClass("has-error").focus();
			return false;
		}
		return true; 	
	}

	//validar nombre evitando tildes y expreciones especiales
function validarNombre(nombre){
	let regex = /^[A-Za\u00f1\u00d1\s]+$/g;
	if (regex.exec(nombre)==null) {
		return false;
	}
	return true;
}
