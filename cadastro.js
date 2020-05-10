
var userAccounts = [];
export { userAccounts };

document.getElementById('signup-open').addEventListener('click', function() {
    document.querySelector(".bg-modal").style.display = 'flex';
})

document.getElementById('close-btn').addEventListener('click', function() {
    document.querySelector(".bg-modal").style.display = 'none';
})

document.getElementById('submit-button').addEventListener('click', function() {
    
    let user = {
        name: document.getElementById('user_name').value,
        email: document.getElementById('user_email').value,
        password: document.getElementById('user_password').value,
    }

    if(user.name != "" && user.email != "" && user.password != ""){
        userAccounts.push(user);
        //console.log(userAccounts);
        document.getElementById('user_name').value = "";
        document.getElementById('user_email').value = "";
        document.getElementById('user_password').value = "";
        alert('Cadastro realizado com sucesso!');
        document.querySelector(".bg-modal").style.display = 'none';

    } else {
        alert('Erro ao realizar o cadastro. Favor, preencher todos os campos.');
    }
})

