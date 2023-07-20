import { sequelize } from "../database/database.js";
import { Usuario} from "../models/Usuario.js";


export async function getUsuario(req, res) {
    try {
      const usuarios = await Usuario.findAll({
        attributes: [ "idUsuario", "nombreU", "apellidoU", "usuarioU", "contrasenaU" ],
        order: [["nombreU", "DESC"]],
        
      });
      res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
export async function createUsuario(req, res) {
    try {
      const { idUsuario, nombreU, apellidoU, usuarioU, contrasenaU } = req.body;
      const [usuario, created] = await Usuario.upsert({
        idUsuario,
        nombreU,
        apellidoU,
        usuarioU,
        contrasenaU
      }, {
        returning: true,
      });
      if (created) {
        return res.json({ message: 'Usuario creado exitosamente', usuario });
      }
      return res.json({ message: 'Usuario actualizado exitosamente', usuario });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }