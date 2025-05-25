import { Router } from 'express';
import { saveData } from '../controller/saveController';

const router = Router();

router.post('/saveData', saveData);

export default router;