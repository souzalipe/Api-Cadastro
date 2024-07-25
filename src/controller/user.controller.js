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

export const createNewUser = (req, res) => {
    const { name, email, age, login, password } = req.body;

    try {
        if (!name || !email || !age || !login || !password) {
            throw new Error("Um dos campos não confere");
        }

        const newUser = new User(name, email, age, login, password);
        users.push(newUser);
        res.status(201).send(newUser); // Adicionado status de sucesso e retorno do novo usuário
    } catch (e) {
        res.status(400).send({ erro: "Não foi possível criar o Usuário" });
    }
};


export const getUserById = (req, res) => {
    const idParametro = req.params.id;

    try {
        const userEncotrado = users.find((user) => user.id == idParametro); // Corrigido nome da variável e case-sensitive

        if (!userEncotrado) {
            throw new Error("Not found");
        }
        res.status(200).send(userEncotrado); // Corrigido "response" para "res"
    } catch (e) {
        res.status(404).send({ error: e.message }); // Corrigido "response" para "res"
    }
};


export const getUserByName = (req, res) => {
    const nomeParametro = req.params.name;

    try {
        const userEncotrado = users.find((user) => user.name == nomeParametro); // Corrigido nome da variável

        if (!userEncotrado) {
            throw new Error("Not found");
        }
        res.status(200).send(userEncotrado); // Corrigido "response" para "res"
    } catch (e) {
        res.status(404).send({ error: e.message }); // Corrigido "response" para "res"
    }
};


export function deleteUserById(req, res) {
    let idParametro = req.params.id;

    try {
        let userParaDeletar = users.find((user) => user.id == idParametro); // Corrigido nome da variável

        if (!userParaDeletar) {
            throw new Error("Not found");
        }

        users = users.filter((user) => user != userParaDeletar); // Corrigido nome da variável
        
        res.status(204).send();
    } catch (e) {
        res.status(404).send(e.message); // Corrigido "response" para "res"
    }
}


export const updateUserById = (req, res) => {
    const userID = req.params.id;

    try {
        let indexUserParaAtualizar = users.findIndex((user) => user.id == userID); // Corrigido nome da variável
        if (indexUserParaAtualizar == -1) {
            throw new Error("Not found");
        }

        let userAtualizado = { ...users[indexUserParaAtualizar], ...req.body }; // Merging updates into existing user

        users[indexUserParaAtualizar] = userAtualizado;
        res.status(200).send({ message: "User atualizado com sucesso", userAtualizado }); // Corrigido "con" para "com"
    } catch (e) {
        res.status(404).send({ error: e.message });
    }
};
