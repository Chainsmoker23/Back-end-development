import express from 'express';

import { createCatalog, getOrders }from '../controllers/sellerController.js';


const router = express.Router();


router.post('/create-catalog', createCatalog);

router.post('/orders', getOrders);

export default router;