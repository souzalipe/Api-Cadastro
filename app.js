import express from 'express';
import nodemailer from 'nodemailer';
import sequelize from './src/database/config.js'; // importei o sequelize
import { userRouter } from './src/router/user.router.js';

const app = express();


app.use(express.json()); // -> middlewear de conversão para json 

app.use(userRouter);

const Port = 3000;

// Nodemailer 

const transport = nodemailer.createTransport({
	host:'',
	port: 465,
	secure: true,
	auth: {
		user: '', // meu email aqui 
		pass: '' //senha do seu email gerado pelo google
	}
});

transport.sendMail({
	from: 'NonoProjetos <>', //deve passar o mesmo email do remetente 
	to: 'fn23886@gmail.com',
	subject: 'Enviado email com Nodemailer',
	html: '<h1>Olá, Seja bem vindo ao Nodemailer Felipe</h1>',
	text: 'Estou usando Nodemailer boy',
})
.then(()=> console.log("Email enviado boy"))
.catch((err)=>console.log('Erro ao enviar email: ', err));






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