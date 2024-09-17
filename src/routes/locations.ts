import { Router } from 'express';
import { saveLocation } from '../controllers/locationController';

const router = Router();

router.post('/locations', saveLocation);

export default router;
