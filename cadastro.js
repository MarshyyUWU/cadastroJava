function Verificar(){

    let email = document.getElementById('CadastroEmail').value;
    let senha = document.getElementById('password').value;
    let senha2 = document.getElementById('confirm_password').value;
    let telephone = document.getElementById('number').value;
    let CPF_CNPJ = document.getElementById('CPF_CNPJ').value;
    // let CEP = document.getElementById('CEP').value;
   
    // declarando as variaveis ^^ || !CEP

    if(!email || !senha || !telephone || !CPF_CNPJ || !CEP){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    }else{
      alert("Campos preenchidos com sucesso");

      if(senha.value != confirm_password.value) {
        confirm_password.setCustomValidity("Senhas diferentes!");
      } else {
        confirm_password.setCustomValidity('');
      }
    }  

  }

    // o código abaixo foi pego de um site, serve para confirmar a senha.

      var password = document.getElementById("password")
    , confirm_password = document.getElementById("confirm_password");

  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;
