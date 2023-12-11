import Catalog from '../models/catalog.js';
import order from '../models/order.js';


export const createCatalog = async(req ,res)=>{

    try {
        const {sellerId, products}= req.body;
                const catalog=new Catalog({
     seller:sellerId,products}); 
                await catalog.save();
      res.status(201).json({
                 message:'Catalog created successfully'
            });
    } catch (error) {
                 res.status(500).json({
          message:'catalog not created'
        });
    }
};


export const getOrders = async(req ,res)=>{

    try {
        const orders = await order.find({seller:req.user._id});
        res.status(500).json({error: 'invaild order'})
    } catch (error) {
        
    }
};