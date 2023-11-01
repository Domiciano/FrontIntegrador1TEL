class UserCard{

    constructor(user){
        this.user = user;
        console.log("Dentro del constructor: "+this.user.nombreDeUsuario);
    }

    render(){
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

        cardbody.appendChild(title);
        container.appendChild(img);
        container.appendChild(cardbody);

        title.innerHTML = this.user.nombreDeUsuario;

        return container;
    }


}