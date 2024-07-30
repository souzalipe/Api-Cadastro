import { Sequelize } from "sequelize"; //importei o sequelize neste caso é copia e cola 

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./src/database/database-sqlite.db",// onde nós queremos CRIAR o arquivo do banco de dados
});

export default sequelize;