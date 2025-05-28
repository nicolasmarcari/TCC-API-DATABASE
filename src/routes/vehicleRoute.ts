import { Router } from 'express';
import { saveData } from '../controller/saveController';
import { validateVehicle } from '../middlewares/vehicleMiddleware';
import { vehicleDataSchema } from '../validators/vehicleValidators';

const router = Router();

router.post('/saveVehicle', validateVehicle(vehicleDataSchema), saveData);

export default router;