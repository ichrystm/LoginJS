import { userAccounts } from './cadastro.js';
import { showMessage } from './status.js';
export { loginstatus };

let email = document.getElementById("email");
let password = document.getElementById("password");
const button = document.getElementById("login-button");
let loginstatus = 0;


button.addEventListener('click', isEmpty);

function login() {
    if(email.value != "" && password.value != "" && userAccounts.length != 0){
        for (var i = 0; i < userAccounts.length;  i++) {
            if(userAccounts[i].email == email.value){
                let id = i;
                if(userAccounts[id].password == password.value){
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
    }else{
        console.log("Favor, preencher os campos de login e senha.");
    }
}

function isEmpty() {
    if(userAccounts.length != 0){
        login()
        loginstatus = 1;
    } else {
        showMessage();
    }
}




