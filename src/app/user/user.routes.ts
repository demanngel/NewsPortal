import express from 'express';
import {login, register} from "./user.controller";

const router = express.Router();

router.post('/api/auth/register', register);
router.post('/api/auth/login', login);

export default router;