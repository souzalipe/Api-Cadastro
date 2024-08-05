import sequelize from "../database/config.js"
import { DataTypes } from "sequelize"; // DataType para colocar na tabela

const User = sequelize.define("User",{
    id: {
        type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

export { User };