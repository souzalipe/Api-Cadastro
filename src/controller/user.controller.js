import { User } from "../models/user.models.js";

let users = [
    new User("Alice", "alice@example.com", 25, "alice25", "password123"),
    new User("Bob", "bob@example.com", 30, "bob30", "password456"),
    new User("Charlie", "charlie@example.com", 35, "charlie35", "password789"),
    new User("Diana", "diana@example.com", 28, "diana28", "password321"),
    new User("Edward", "edward@example.com", 32, "edward32", "password654"),
    new User("Fiona", "fiona@example.com", 26, "fiona26", "password987"),
    new User("George", "george@example.com", 29, "george29", "password654"),
    new User("Hannah", "hannah@example.com", 31, "hannah31", "password321"),
    new User("Ian", "ian@example.com", 34, "ian34", "password111"),
    new User("Jane", "jane@example.com", 27, "jane27", "password222"),
    new User("Kevin", "kevin@example.com", 33, "kevin33", "password333"),
    new User("Laura", "laura@example.com", 24, "laura24", "password444"),
    new User("Mike", "mike@example.com", 36, "mike36", "password555"),
    new User("Nina", "nina@example.com", 29, "nina29", "password666"),
    new User("Oscar", "oscar@example.com", 28, "oscar28", "password777"),
    new User("Paul", "paul@example.com", 35, "paul35", "password888")
];

export const  getAllUser = (req,res) =>{
    res.status(200).send(users);
};

export const creatNewUser = (req,res) =>{
    const { name, email, age, login, password } = req.body; //desestruturei para redução de linha de código 
    // ou seja tudo do meu 'constructor' em uma linha de código.

    try{
        if(!name || !email || !age || !login || !password ){ // significa que se o 'nome' não vier, jogue um error
            throw new Error("Um dos campos não confere")
        }

        const newUser = new User(name, email, age, login, password);

        users.push(newUser);
    } catch (e){
        res.status(400).send({erro: "Não foi possivel criar o Usuário"})
    };
};

export const getUserById = (req,res) =>{
    const idParametro = req.params.id;

    try {
        const userEncotrado = users.find((User)=> User.id == idParametro);

        if (!userEncotrado) {
            throw new Error("Not found");
        }
        response.status(200).send(userEncotrado);
    } catch (e) {
		response.status(404).send({error: e.message,});
    }
}

export const getUserByName = (req,res) =>{
    const nomeParametro = req.params.name;

    try {
        const userEncotrado = users.find((User)=> User.name == idParametro);

        if (!userEncotrado) {
            throw new Error("Not found");
        }
        response.status(200).send(userEncotrado);
    } catch (e) {
		response.status(404).send({error: e.message,});
    }
}

export function deleteUserById(req,res) {
    let idParametro = req.params.id;

    try {
		let userParaDeletar = users.find((User) => User.id == idParametro);

		if (!userParaDeletar) {
			throw new Error("Not found");
		}

		users = users.filter((User) => User != userParaDeletar);
        
		// essa é a base pro PUT, você reatribui com o valor atualizado
		//slice -> se a gente considerar que o id é o nosso indice
		// quando eu removo um item, o indice muda, logo o filter é melhor não precisarmos
		//lidar com essa complexidade agora

		response.status(204).send();
	} catch (e) {
		response.status(404).send(e.message);
    }
}
