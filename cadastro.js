function Verificar(){

    let email = document.getElementById('CadastroEmail').value;
    let senha = document.getElementById('CadastroSenha').value;
    let Rua = document.getElementById('Adress').value;
    let Telephone = document.getElementById('number').value;
    console.log(email);
    
    if(!email || !senha || !Rua || !Telephone){
        alert("campos de preenchimento obrigatório. porfavor preencher");
    }


}