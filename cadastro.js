function Verificar(){

    let email = document.getElementById('CadastroEmail').value;
    let senha = document.getElementById('CadastroSenha').value;
    let senha2 = document.getElementById('ConfirmeSenha').value;
    let telephone = document.getElementById('number').value;
    let CPF_CNPJ = document.getElementById('CPF_CNPJ').value;
    let CEP = document.getElementById('CEP').value;
    console.log(email);
   
    // declarando as variaveis ^^ 

    if(!email || !senha || !telephone || !CPF_CNPJ || !CEP){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    }

    if(!senha2){
        alert("As senhas não estão iguais, tente novamente");
    }
    //Usando as variaveis com uma mensagem se não forem preenchidas.

}