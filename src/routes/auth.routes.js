import { Router } from "express";
import { authRegister, authLogin, authLogout } from "../controllers/auth.controller.js";

const router = Router();

router.post('/register', authRegister);
router.post('/login', authLogin);
router.post('/logout', authLogout);

export default router;