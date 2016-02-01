$(document).ready(function(){
	$('#errorlog').hide(); //Esconde o elemento com id errorlog
	$('#successlog').hide(); //Esconde o elemento com id successlog
	$('#formlogin').submit(function(){ 	//Ao submeter formulário
		var email=$('#email').val();	//Pega valor do campo email
		var password=$('#password').val();	//Pega valor do campo senha
		$.ajax({			//Função AJAX
			url:"https://tecvidya-java.herokuapp.com/login", //REST Java
			type:"post",				//Método de envio
			data: "email="+email+"&password="+password,	//Dados
   			success: function (result){ //Sucesso no AJAX					
                $('#successlog').show();
            },
            error: function(result) {
                $('#errolog').show();
            }
		})
		return false;
	})
})