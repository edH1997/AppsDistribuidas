import { Auditoria } from '../models/Auditoria.js';
import { Op } from 'sequelize';

export async function createAuditoria(accion, modulo, funcionalidad, observacion) {
  try {
    const auditoria = await Auditoria.create({
      aud_accion: accion,
      aud_modulo: modulo,
      aud_funcionalidad: funcionalidad,
      aud_observacion: observacion,
    });

    console.log('Entrada de auditoría creada exitosamente:', auditoria);
    return auditoria;
  } catch (error) {
    console.error('Error al crear la entrada de auditoría:', error.message);
    throw error;
  }
}

export async function getAuditoria(req, res) {
  try {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ message: 'Debes proporcionar las fechas de inicio y fin.' });
    }

    const auditorias = await Auditoria.findAll({
      attributes: ['aud_id', 'aud_fecha', 'aud_accion', 'aud_modulo', 'aud_funcionalidad', 'aud_observacion'],
      where: {
        aud_fecha: {
          [Op.between]: [startDate, endDate], 
        },
      },
      order: [['aud_id', 'DESC']],
    });

    res.json(auditorias);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}