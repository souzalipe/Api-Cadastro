import express from 'express';
import sequelize from './src/database/config.js'; // importei o sequelize
import { userRouter } from './src/router/user.router.js';

const app = express();

app.use(express.json()); // -> middlewear de conversão para json 

app.use(userRouter);

const Port = 3000;

// Sincronia de Dados

sequelize
	.sync()
	.then(() => {
		app.listen(Port, () => {
			console.log(`A aplicação está rodando na porta  http://localhost:${Port}`);
		});
	})
	.catch((erro) => {
		console.error("Não foi possível conectar no banco de dados", erro);
	});