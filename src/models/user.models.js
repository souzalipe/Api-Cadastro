let idAuto = 1; //coloquei para um id autoincrementavel. 

export class User {
    constructor(name,email,age,login,password){ // Não é precisso colocar o 'id' no cronstructor.
        this.id = idAuto++;
        this.name = name;
        this.email = email;
        this.agr = age;
        this.login = login;
        this.password = password;
    }
}