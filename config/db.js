import { Sequelize } from "sequelize";


const db = new Sequelize('mevn-blog', 'root', '' ,{
   host: "localhost",
   dialect: "mysql"

})

export default db