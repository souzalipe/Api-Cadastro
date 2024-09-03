import { app } from "../../app";
import  request  from "supertest";
import { User } from "../models/user.models.js";

jest.mock("../models/user.models.js");

describe('Teste de rotas e respostas', () => {

    test('deve retornar a resposta', async ()=>{
        const mockUsersResponse = []
        User.findAll.mockResolvedValue(mockUsersResponse)
        const resposta = await request(app).get("/api/user/all")
        expect(resposta.status).toBe(200)
    })
})