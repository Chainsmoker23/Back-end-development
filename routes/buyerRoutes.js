import express from 'express';
import { createOrder, getListOFSellers, getSellerCatalog } from '../controllers/buyerController.js';



const router = express.Router();
///  BUYER ROUTES 

router.get('/list-of-sellers',getListOFSellers);

router.get('/seller-catalog/:seller_id', getSellerCatalog);

router.post('/create-order/:seller_id', createOrder);

export default router;