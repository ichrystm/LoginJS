import { userAccounts } from './cadastro.js';
import { showMessage } from './status.js';
export { loginstatus };
export { isEmpty };


let loginstatus = 0;


const login = () => {
    if(getLoginInfo().email != "" && getLoginInfo().password != "" && loginstatus == 1){
        checkPassword();
    }else{
        console.log("Favor, preencher os campos de login e senha.");
    }
}

const isEmpty = () => {
    if(userAccounts.length != 0){
        loginstatus = 1;
        login()
    } else {
        showMessage();
    }
}


const checkPassword = () => {
    for (var i = 0; i < userAccounts.length;  i++) {
        if(userAccounts[i].email == getLoginInfo().email){
            let id = i;
            if(userAccounts[id].password == getLoginInfo().password){
                loginstatus = 4;
                showMessage();
            }else {
                loginstatus = 2;
                showMessage();
            }
        }else{
            loginstatus = 3;
            showMessage();
        }
    }
}

const getLoginInfo = () => {

    let loginInfo = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }

    return loginInfo;
}

document.getElementById("login-button").addEventListener('click', isEmpty);