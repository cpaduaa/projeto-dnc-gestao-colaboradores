import express from "express";
import colaboradorController from "../controllers/colaboradorController.js";
import { autenticar, autorizarAdmin } from "../middlewares/autenticar.js";

const router = express.Router();

router.post("/colaboradores/listar", autenticar, colaboradorController.listar);
router.post("/colaboradores/criar", autenticar, colaboradorController.criar);
router.put("/colaboradores/:id", autenticar, colaboradorController.editar);
router.delete("/colaboradores/:id", autenticar, colaboradorController.deletar);

export default router;
