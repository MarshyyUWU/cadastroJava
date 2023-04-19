function Verificar(){

    let email = document.getElementById('CadastroEmail').value;
    let senha = document.getElementById('CadastroSenha').value;
    let telephone = document.getElementById('number').value;
    let CPF_CNPJ = document.getElementById('CPF_CNPJ').value;
    let CEP = document.getElementById('CEP').value;
    console.log(email);
    
    if(!email || !senha || !telephone || !CPF_CNPJ || !CEP){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    }


}