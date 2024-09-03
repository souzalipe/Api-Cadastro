import express from 'express';
import nodemailer from 'nodemailer';
import sequelize from './src/database/config.js'; 
import corsConfig from './src/config/corsConfig.js';
import { userRouter } from './src/router/user.router.js';
import { setupSwagger } from './src/docs/swaggerConfig.js'

export const app = express();
const Port = process.env.Port || 3000;
app.use(express.json()); 
app.use(corsConfig)

setupSwagger(app);


app.use('/api', userRouter);


// Código do Nodemailer (mantido comentado, caso não esteja sendo usado no momento)

const transport = nodemailer.createTransport({
	host:'smtp.gmail.com', 
	port: 465,
	secure: true,
	auth: {
		user: 'fn23886@gmail.com', 
		pass: 'ovyc itfi gqdu bkzx' 
	}
});

transport.sendMail({
	from: 'Api de Gerenciamento de Usuários<fn23886@gmail.com>', 
	 to: 'rrobotinho@gmail.com>', //<<<<<----------------------------- Insira seu email aqui e receba a documentação swagger.
	subject: 'Seja Bem vindo a Api de Gerenciamento de Usuários',
	html: '<h1>Olá, veja toda a documentação da Api por aqui!!<a href="http://localhost:3000/api-docs">Documentação Api-Cadastro<a/></h1>',
	text: 'Seja bem vindo a Api de Gerenciamento de Usuários.',
})
.then(() => console.log("Email enviado com sucesso!"))
.catch((err) => console.log('Erro ao enviar email: ', err));


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

