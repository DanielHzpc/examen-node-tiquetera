import { Router } from "express";
import { createTiquetera, getTiqueteras, getTiqueteraById, updateTiquetera, deleteTiquetera } from "../controllers/tiqueteraController.js";

const router = Router();

router.post("/tiquetera/", createTiquetera);
router.get("/tiquetera/", getTiqueteras);
router.get("/tiquetera/:id", getTiqueteraById);
router.put("/tiquetera/:id", updateTiquetera);
router.delete("/tiquetera/:id", deleteTiquetera);



export default router;


