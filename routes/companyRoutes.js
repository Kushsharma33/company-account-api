import { Router } from 'express';
const router = Router();
import { getAllCompanies, updateCompanyStatus } from '../controllers/companyRoutes';
import { authMiddleware } from '../middleware/authMiddleware';

// GET /accounts
router.get('/', authMiddleware, getAllCompanies);

// POST /accounts/:id/status
router.post('/:id/status', authMiddleware, updateCompanyStatus);

export default router;
