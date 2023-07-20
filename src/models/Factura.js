import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Factura = sequelize.define(
    "facturas",
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        subtotal: {
            type: DataTypes.DOUBLE,
        },
        iva: {
            type: DataTypes.DOUBLE,
        },
        total: {
            type: DataTypes.DOUBLE,
        },   
    },
    
    {
        timestamps: false,
    }
);

