const signupEmail = document.getElementById('signupEmail');
const signupName = document.getElementById('signupName');
const signupPassword = document.getElementById('signupPassword');
const signupButton = document.getElementById('signupButton');

if(window.localStorage.getItem('user') !== null){
    window.location.href = '/index.html';
}

signupButton.addEventListener('click', async function(){
    let userDTO = {
        username: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    };
    let data = JSON.stringify(userDTO);
    let response = await fetch('https://7f93-200-3-193-78.ngrok-free.app/user/create', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: data
    });
    if(response.status == 200){
        let responseData = await response.json();
        console.log(responseData);
        window.location.href = "/signin.html";
    }else{
        alert(await response.text());
    }
    
});