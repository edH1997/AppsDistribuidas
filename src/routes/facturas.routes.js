import { Router } from "express";
import { getFacturas } from "../controllers/facturas.controller.js";

const router = Router();

router.get('/', getFacturas);
export default router;