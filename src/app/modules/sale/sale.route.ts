import express from 'express';
import { saleControllers } from './sale.controller';
import auth from '../../middleware/auth';

const router = express.Router();

router.post('/', auth(), saleControllers.createSale);
router.get('/sales-history', auth(), saleControllers.getSalesHistory);

export const SaleRoutes = router;
