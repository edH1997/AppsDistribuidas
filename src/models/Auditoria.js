import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Auditoria = sequelize.define(
  "auditoria",
  {
    aud_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    aud_fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    aud_accion: {
      type: DataTypes.STRING
    },
    aud_modulo: {
      type: DataTypes.STRING
    },
    aud_funcionalidad: {
      type: DataTypes.STRING
    },
    aud_observacion: {
      type: DataTypes.STRING
    },
  },
  {
    timestamps: false,
  }
);