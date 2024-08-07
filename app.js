import express from 'express';
import nodemailer from 'nodemailer';
import sequelize from './src/database/config.js'; 
import { userRouter } from './src/router/user.router.js';
import { setupSwagger } from './src/docs/swaggerConfig.js'

const app = express();
const Port = process.env.Port || 3000;
app.use(express.json()); 


setupSwagger(app)


app.use('/api', userRouter);


// Código do Nodemailer (mantido comentado, caso não esteja sendo usado no momento)

// const transport = nodemailer.createTransport({
// 	host:'smtp.gmail.com', 
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		user: 'fn23886@gmail.com', // meu email aqui 
// 		pass: 'ovyc itfi gqdu bkzx' // senha do seu email gerado pelo google
// 	}
// });

// transport.sendMail({
// 	from: 'teste <fn23886@gmail.com>', // deve passar o mesmo email do remetente 
// 	to: 'rrobotinho@gmail.com>',
// 	subject: 'Seja Bem vindo ao Gotas do Amanhã',
// 	html: '<h1>Olá, Seja bem vindo ao Gotas do Amanhã Felipe</h1>',
// 	text: 'Estou Gotas do Amanhã',
// })
// .then(() => console.log("Email enviado boy"))
// .catch((err) => console.log('Erro ao enviar email: ', err));


sequelize
	.sync()
	.then(() => {
		app.listen(Port, () => {
			console.log(`A aplicação está rodando na porta http://localhost:${Port}`);
			console.log(`Documentação disponível em http://localhost:${Port}/api-docs`);
		});
	})
	.catch((erro) => {
		console.error("Não foi possível conectar no banco de dados", erro);
	});
