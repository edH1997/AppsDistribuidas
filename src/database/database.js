import Sequelize from "sequelize";

// export const sequelize = new Sequelize('DBCuentasCobrar', 'Edwin', 'Edd123edd_78', {
//     host: 'servercuentas.postgres.database.azure.com',
//     dialect: 'postgres',
//     port: '5432',
//     sslmodel: 'require'
// });
//


// export const { Sequelize } = require('sequelize');

// // // Option 1: Passing a connection URI
//  Sequelize = new Sequelize('psql::memory:') // Example for sqlite
export const sequelize = new Sequelize('postgres://Edwin:Edd123edd_78@servercuentas.postgres.database.azure.com/DBCuentasCobrar?sslmode=require') // Example for postgres