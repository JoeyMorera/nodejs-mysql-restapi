import { Router } from "express";
import { home } from "../controllers/index.controller.js";

const router = Router()


//Route to Controller 
router.get('/home', home )

export default router;