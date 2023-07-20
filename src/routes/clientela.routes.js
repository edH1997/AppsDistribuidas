import { Router } from "express";
import { getClientela, obtenerClientela} from "../controllers/clientela.controller.js";
const router = Router();

router.get('/', getClientela);
router.get('/:id', obtenerClientela);
export default router;