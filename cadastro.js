function Verificar(){

    let email = document.getElementById('CadastroEmail').value;
    let senha = document.getElementById('CadastroSenha').value;
    let telephone = document.getElementById('number').value;
    console.log(email);
    
    if(!email || !senha || !telephone){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    }


}