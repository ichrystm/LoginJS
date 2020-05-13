
var userAccounts = [];
export { userAccounts };
let loginstatusreg = 0;

document.getElementById('signup-open').addEventListener('click', function() {
    document.querySelector(".bg-modal").style.display = 'flex';
})

document.getElementById('close-btn').addEventListener('click', function() {
    closeSignup();
})

document.getElementById('submit-button').addEventListener('click', function() {
    validateEmail();
})

const validateEmail = () => {

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(getUserInfo().email.match(mailformat)) {
            validatePassword();
        } else {
            alert('E-mail inválido');
        }
    }

const validatePassword = () => {
    
    if(getUserInfo().password.length >= 8){
        registerUser();
    }else {
        alert('A senha deve conter no mínimo 7 caracteres.');
    }
}

const registerUser = () => {

    if(getUserInfo().name != "" && getUserInfo().password != "") {

        userAccounts.push(getUserInfo());
        clearFields();
        alert('Cadastro realizado com sucesso!');
        closeSignup();

    } else {
        alert('Erro ao realizar o cadastro. Favor, preencher todos os campos.');
    }
}

const closeSignup = () => {
    document.querySelector(".bg-modal").style.display = 'none';
}

const getUserInfo = () => {

    let userInfo = {
        name: document.getElementById('user_name').value,
        email: document.getElementById('user_email').value,
        password: document.getElementById('user_password').value,
    }

    return userInfo;
}

const clearFields = () => {
    document.getElementById('user_name').value = "";
    document.getElementById('user_email').value = "";
    document.getElementById('user_password').value = "";
}