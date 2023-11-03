const signinEmail = document.getElementById('signinEmail');
const signinPassword = document.getElementById('signinPassword');
const signinButton = document.getElementById('signinButton');


//undefined -> let a;
//null -> la variable no tiene valor

if(window.localStorage.getItem('user') !== null){
    window.location.href = '/index.html';
}


signinButton.addEventListener('click', async function(){
    let userDTO = {
        email: signinEmail.value,
        password: signinPassword.value
    };
    let data = JSON.stringify(userDTO);
    let response = await fetch('https://7f93-200-3-193-78.ngrok-free.app/user/login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: data
    });
    if(response.status == 200){
        let responseData = await response.json();
        console.log(responseData);
        //Salvar nuestro usuario
        window.localStorage.setItem('user', JSON.stringify(responseData) );

        window.location.href = "/index.html";
    }else{
        alert(await response.text());
    }
});
