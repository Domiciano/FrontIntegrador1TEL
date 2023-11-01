const signinEmail = document.getElementById('signinEmail');
const signinPassword = document.getElementById('signinPassword');
const signinButton = document.getElementById('signinButton');

signinButton.addEventListener('click', async function(){
    let userDTO = {
        email: signinEmail.value,
        password: signinPassword.value
    };
    let data = JSON.stringify(userDTO);
    let response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: data
    });
    if(response.status == 200){
        let responseData = await response.json();
        console.log(responseData);
        window.location.href = "/index.html";
    }else{
        alert(await response.text());
    }
});
