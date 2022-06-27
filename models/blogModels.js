import { Sequelize } from "sequelize";
import db from '../config/db.js';

const { DataTypes } = Sequelize;


const blog = db.define('blog', {
    title : {
        type: DataTypes.STRING,
        allowNull: false
    },
    subtitle : {
        type: DataTypes.STRING,
        allowNull: false
    },
    content : {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    paranoid:true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    freezeTableName: true
});

export default blog;