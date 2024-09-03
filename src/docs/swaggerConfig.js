import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const currentDirectory = path.resolve(); // ela tá obtendo o nosso diretório atual
const userDocsPath = path.join(currentDirectory, "src/docs/user.yaml");
const userDocs = YAML.load(userDocsPath);






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