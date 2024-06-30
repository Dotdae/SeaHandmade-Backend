import { Router } from "express";
import { authRegister, authLogin, authLogout, authProfile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.post('/register', authRegister);
router.post('/login', authLogin);
router.post('/logout', authLogout);
router.get('/profile', authRequired, authProfile);

export default router;