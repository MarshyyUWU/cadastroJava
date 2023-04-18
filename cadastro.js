function Verificar(){

    let email = document.getElementById('CadastroEmail').value;
    let senha = document.getElementById('CadastroSenha').value;
    console.log(email);
    
    if(!email || !senha){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    }


}