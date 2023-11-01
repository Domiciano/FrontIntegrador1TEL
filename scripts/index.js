const usernameInput = document.getElementById('usernameInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const passAgainInput = document.getElementById('passAgainInput');
const submitBtn = document.getElementById('submitBtn');
const userCardContainer = document.getElementById('userCardContainer');

async function getUsers(){
    let response = await fetch('http://localhost:8080/user/all');
    let json = await response.json();
    console.log(json);

    json.forEach(user => {
        var card = new UserCard( user );
        console.log( card.render() );
        userCardContainer.appendChild(card.render());    
    });
}

getUsers();