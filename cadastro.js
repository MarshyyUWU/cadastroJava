function Verificar(){

    let email = document.getElementById('CadastroEmail').value;
    let senha = document.getElementById('CadastroSenha').value;
    let telephone = document.getElementById('number').value;
    let CPF_CNPJ = document.getElementById('CPF_CNPJ').value;
    let CEP = document.getElementById('CEP').value;
    console.log(email);
   
    // declarando as variaveis ^^ 

    if(!email || !senha || !telephone || !CPF_CNPJ || !CEP){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    }


    // o código abaixo foi pego de um site, serve para confirmar a senha.

    var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

}