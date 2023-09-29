const usernameInput = document.getElementById('usernameInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const passAgainInput = document.getElementById('passAgainInput');
const submitBtn = document.getElementById('submitBtn');

//Registrar eventos

//1. Click al boton de submit

async function createUser(data){
    //fetch
    console.log("Delta");
    let response = await fetch('https://f330-200-3-193-225.ngrok-free.app/user/create', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: data
    });
    let json = await response.json();
    console.log(json);

}

async function sendUser(){
    let username = usernameInput.value;
    let email = emailInput.value;
    let pass = passInput.value;
    let passAgain = passAgainInput.value;
    
    let A = false; 
    let B = 10.5;
    let C = 'Hola mundo';
    let D = {name:'David Vergara', code:'A00234234', age: 19};
    let E = ["Luisa Castaño", "Juan Yustes", "Juan Rosero"];
    let userDTO = {
        nombreDeUsuario: username,
        correoElectronico: email,
        clave: pass
    };
    let json = JSON.stringify(userDTO);
    console.log(json);
    
    await createUser(json);
    

}




console.log("Alfa");

submitBtn.addEventListener('click', sendUser);

console.log("Beta");

//sendUser -> referenciar funcion
//console.log(sendUser);
//sendUser() -> ejecutar funcion
//console.log(sendUser());



async function getUsers(){
    let response = await fetch('https://f330-200-3-193-225.ngrok-free.app/user/all');
    let json = await response.json();
    console.log(json);
}

getUsers();