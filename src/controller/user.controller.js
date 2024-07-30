import { request, response } from "express";
import { User } from "../models/user.models.js";

export const  getAllUser = async (req,res) =>{
    try {
        const users = await User.findAll() // find all: vai pagar todos os usuários de User
        response.status(200).send(users);
    } catch {
        response.status(500).send({
            error: "Não foi possivel encontrar os usuários",
        });
    }
};

export const createNewUser = async (req, res) => {

    try {
        const newUser = request.body;
        const userCriado = await User.create(newUser);
        response.status(201).send({
            message: "User criado com sucesso",
            novoUser: userCriado,
        })
    } catch {
        response.status(500).send({ error: "Não foi possível criar um Usuario" });
    }
};


export const getUserById = async (req, res) => {

    try {
        const idParametro = request.params.id
        const userEncontrado = await User.findByPk(idParametro)
        res.status(200).send(userEncontrado); // Corrigido "response" para "res"
    } catch {
        res.status(404).send({ error: e.message }); // Corrigido "response" para "res"
    }
};

export const deleteUserById = async (req, res) =>{
    let idParametro = request.params.id;

	try {
		let userParaDeletar = await User.findByPk(idParametro)

		if (!userParaDeletar) {
      throw new Error("Not found");
    }

		await userParaDeletar.destroy()

		response.status(204).send();
	} catch (e) {
		response.status(404).send(e.message);
	}
}


export const updateUserById = async (req, res) => {
    const idParametro = request.params.id;

	try {
		const userDaRequest = request.body
		const userParaAtualizar = await User.findByPk(idParametro)

		if (!userParaAtualizar) {
            throw new Error("Not found");
    }
		//atualizo ele com o método update
		const userAtualizado = await userParaAtualizar.update(userDaRequest)

		response.status(201).send({
			message: "Usuário criado com suceso",
			userAtualizado,
		});

	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};
