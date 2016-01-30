$(document).ready(function(){
	$('#errolog').hide(); //Esconde o elemento com id errolog
	$('#formlogin').submit(function(){ 	//Ao submeter formulário
		var email=$('#email').val();	//Pega valor do campo email
		var password=$('#password').val();	//Pega valor do campo senha
		$.ajax({			//Função AJAX
			url:"https://nameless-cove-36890.herokuapp.com/login", //REST Java
			type:"post",				//Método de envio
			data: "email="+email+"&password="+password,	//Dados
   			success: function (result){ //Sucesso no AJAX					
                location.href='lista.php'	//Redireciona
            },
            error: function(result) {
                $('#errolog').show();
            }
		})
		return false;	//Evita que a página seja atualizada
	})
})