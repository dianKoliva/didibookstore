import express from 'express';
import { createIndicator,getAllIndicators } from '../controllers/indicatorController.js';
const router = express.Router();

router.post('/', createIndicator);
router.get('/', getAllIndicators);
export default router;