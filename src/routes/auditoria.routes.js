import { Router } from "express";
import { getAuditoria, createAuditoria } from "../controllers/auditoria.controller.js";

const router = Router();

router.get('/', getAuditoria);
router.post('/', createAuditoria);

export default router;