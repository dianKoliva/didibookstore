import express from 'express';
import { getAllYears,createYear } from '../controllers/yearsController.js';
const router = express.Router();

router.post('/', createYear);
router.get('/', getAllYears);
export default router;