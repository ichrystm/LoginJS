
var userAccounts = [];
export { userAccounts };
let loginstatusreg = 0;

document.getElementById('signup-open').addEventListener('click', function() {
    document.querySelector(".bg-modal").style.display = 'flex';
})

document.getElementById('close-btn').addEventListener('click', function() {
    document.querySelector(".bg-modal").style.display = 'none';
})

document.getElementById('submit-button').addEventListener('click', function() {

    validateEmail();

})

function validateEmail()
    {
        let emailnow = document.getElementById('user_email').value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(emailnow.match(mailformat))
        {
        validatePassword();
        }
        else
        {
        alert('E-mail inválido');
        }
    }

function validatePassword() {
    let passwordnow = document.getElementById('user_password').value;
    if(passwordnow.length >= 8){
        registerUser();
    }else {
        alert('A senha deve conter no mínimo 7 caracteres.');
    }
}

function registerUser() {


     let user = {
        name: document.getElementById('user_name').value,
        email: document.getElementById('user_email').value,
        password: document.getElementById('user_password').value,
    }



    if(user.name != "" && user.password != ""){
        userAccounts.push(user);
        document.getElementById('user_name').value = "";
        document.getElementById('user_email').value = "";
        document.getElementById('user_password').value = "";
        alert('Cadastro realizado com sucesso!');
        document.querySelector(".bg-modal").style.display = 'none';

    } else {
        alert('Erro ao realizar o cadastro. Favor, preencher todos os campos.');
    }
}

/*function isEmpty() {
    if(userAccounts.length != 0){
        loginstatusreg = 1;
        checkEmailExist();
    } else {
        console.log('n usuarios cadastrados');
    }
}*/

/*function checkEmailExist() {
    //if(loginstatusreg == 1){
        let emailnowreg = document.getElementById('user_email').value;
        for (var i = 0; i < userAccounts.length;  i++) {
            if(userAccounts[i].email == emailnowreg){
                console.log('Usuário ja cadastrado');
            } else {
                registerUser();
            }
        }
    }*/


