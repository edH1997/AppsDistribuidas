import { Router } from "express";
import { createUsuario, getUsuario } from "../controllers/usuario.controller.js";

const router = Router();

router.get('/', getUsuario);


router.post('/', createUsuario);




export default router;