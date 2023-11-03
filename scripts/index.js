const usernameInput = document.getElementById('usernameInput');
const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const passAgainInput = document.getElementById('passAgainInput');
const submitBtn = document.getElementById('submitBtn');
const userCardContainer = document.getElementById('userCardContainer');

async function getUsers(){
    let response = await fetch('http://localhost:8080/user/all',{
        method: 'GET',
        headers: {
            'Authorization':'0de79f93-6dd9-4cd1-88d7-09cc04f2811e'
        },
        body: data
    });
    let json = await response.json();
    console.log(json);

    json.forEach(user => {
        var card = new UserCard( user );
        console.log( card.render() );
        userCardContainer.appendChild(card.render());    
    });
}

getUsers();