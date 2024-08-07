import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express'
import YAML from "yamljs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url); // obtem o diretório 
const __dirname = dirname(__filename);

const userDocs = YAML.load(`${__dirname}/user.yaml`); // carrega o arquivo YARML


const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Cadastro de Usuários",
			version: "1.0.0",
			description: "Uma API para gerenciar um sistema de Usuários",
		},
		components: userDocs.components,
		paths: userDocs.paths,
	},
	apis: [],
};

const swaggerDoc = swaggerJSDoc(options);

const setupSwagger = (app) => {
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};


export { setupSwagger }