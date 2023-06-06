import express from 'express';
import { createPersentage,getAllPercentages } from '../controllers/PercentageController.js';
const router = express.Router();

router.post('/', createPersentage);
router.get('/', getAllPercentages);
export default router;