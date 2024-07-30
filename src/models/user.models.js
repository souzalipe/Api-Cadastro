import sequelize from "../database/config.js"
import { DataTypes } from "sequelize"; // DataType para colocar na tabela

const User = sequelize.define("User",{
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: false,
    }
});

export { User };