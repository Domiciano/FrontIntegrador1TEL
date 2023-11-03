class UserCard{

    constructor(user){
        this.user = user;
    }

    render(){

        //1. Armar el componente
        let container = document.createElement('div'); //<div></div>
        container.classList.add('card');
        container.classList.add('domicard');

        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', 'https://img.freepik.com/premium-photo/abstract-background-images-wallpaper-ai-generated_643360-61851.jpg');

        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body');

        let title = document.createElement('h5');
        title.classList.add('card-title');

        let description = document.createElement('p');
        description.classList.add('card-text');
        description.innerHTML = "De click sobre el botón para obtener mayor información";

        let button = document.createElement('a');
        button.classList.add('btn');
        button.classList.add('btn-primary');
        button.setAttribute('href', '#');
        button.innerHTML = 'More';

        cardbody.appendChild(title);
        cardbody.appendChild(description);
        cardbody.appendChild(button);
        container.appendChild(img);
        container.appendChild(cardbody);

        //2. Poner información sobre el component
        title.innerHTML = this.user.username;

        //3. Acciones del component
        button.addEventListener('click', this.action.bind(this)); //especificar con cual this va a operar


        return container;
    }

    //Dentro de las clases, las funciones se definen asi

    action(event){
        event.preventDefault(); //Previene la ejecución de su acción por defecto
        alert(this.user.username);
        window.localStorage.setItem('userClicked', JSON.stringify(this.user));
        window.location.href = '/userDetail.html';
    }


}