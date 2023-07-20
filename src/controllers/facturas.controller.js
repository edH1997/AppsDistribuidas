import { sequelize } from "../database/database.js";
import { Factura } from "../models/Factura.js";

export const getFacturas = async (req, res) => {
  try {
    const facturas = await Factura.findAll({
      attributes: ["id", "subtotal", "iva", "total"],
      order: [["id", "DESC"]],
    });
    res.json(facturas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
