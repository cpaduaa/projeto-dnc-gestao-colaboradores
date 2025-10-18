import express from "express";
import colaboradorController from "../controllers/colaboradorController.js";
import { autenticar, autorizarAdmin } from "../middlewares/autenticar.js";

const router = express.Router();

router.get("/colaboradores", autenticar, colaboradorController.listar);
router.get("/colaboradores/:id", autenticar, colaboradorController.buscarPorId);
router.post("/colaboradores", autenticar, colaboradorController.criar);
router.put("/colaboradores/:id", autenticar, colaboradorController.editar);
router.delete("/colaboradores/:id", autenticar, colaboradorController.deletar);

export default router;
