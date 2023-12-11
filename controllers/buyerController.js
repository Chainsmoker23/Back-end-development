import usermodel from '../models/usermodel.js';
import Catalog from '../models/catalog.js';
import Order from '../models/order.js';


export const getListOFSellers = async (req,res)=>{
    try {
        const sellers = await usermodel.find({userType:'seller'}).select('username');
        res.status(200).json(sellers);
    } catch (error) {
        res.status(500).json({error:'username is mistake '});
    }
};


export const getSellerCatalog = async (req , res)=>{
    try {
        const sellercatalog = await Catalog.findOne({
            seller:req.params.seller_id}).populate('seller','username');
            res.status(200).json(getSellerCatalog);
    } catch (error) {
        res.status(500).json({error:'seller died'})
    }
};


export const createOrder = async(req ,res)=>{

    try {
        const {buyerId,products}= req.body;
        const order = new Order({buyer:buyerId,seller:req.params.seller_id, products});
        await order.save();
        res.status(201).json({
            message:'Order created successfully'
        });
    } catch (error) {
       res.status(500).json({
        error:'error in products'
       }) 
    }
};


