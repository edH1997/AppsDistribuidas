import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Factura } from "./Factura.js";

export const Clientela = sequelize.define(
  "clientela",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Clientela.hasMany(Factura,{
  foreignKey: 'cliente',
  sourceKey: 'id'

})

Factura.belongsTo(Clientela,{
  foreignKey: 'cliente',
  targetId: 'id'
})