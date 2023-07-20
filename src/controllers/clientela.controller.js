import { sequelize } from "../database/database.js";
import { Clientela } from "../models/Clientela.js";
import { Factura } from '../models/Factura.js'

export async function getClientela(req, res) {
    try {
      const clientes = await Clientela.findAll({
        attributes: [ "id", "nombre" ],
        order: [["nombre", "DESC"]],
        include:Factura
      });
      res.json(clientes);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  export async function obtenerClientela(req, res) {
    const { id } = req.params;
    try {
      const cliente = await Clientela.findOne({
        where: { id },
        attributes: [ "id", "nombre"],
        include:Factura
      });
      res.json(cliente);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  export async function createCliente(req, res) {
    try {
      const { id, nombre } = req.body;
      const [cliente, created] = await Clientela.upsert({
        id,
        nombre,
      }, {
        returning: true,
      });
      if (created) {
        return res.json({ message: 'Cliente creado exitosamente', cliente });
      }
      return res.json({ message: 'Cliente actualizado exitosamente', cliente });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  
  
  