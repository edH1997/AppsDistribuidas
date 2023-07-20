import Sequelize from "sequelize";

// export const sequelize = new Sequelize('DBCuentasCobrar', 'postgres', 'theo123', {
//     host: 'localhost',
//     dialect: 'postgres'
// })


export const sequelize = new Sequelize("postgres://Henry:Edd123edd@cuentasdb.postgres.database.azure.com/cuentasdb?sslmode=require");