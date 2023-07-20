import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define(
  "usuarios",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
    nombreU: {
      type: DataTypes.STRING,
    },
    apellidoU: {
      type: DataTypes.STRING,
    },
    usuarioU: {
      type: DataTypes.STRING,
    },
    contrasenaU: {
      type: DataTypes.STRING,
    },
    estadoU: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },

  },
  {
    timestamps: false,
  }
);

