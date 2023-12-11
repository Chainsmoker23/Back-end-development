import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    buyer:{
        type:String,

        Reference:'User',

    },
    seller:{
        type:String,
        type:Number,
        Reference:'User',
    },
    products:
    [{name:String,
    price:Number, 
    }],
   
    
    
});

const Order = mongoose.model('Order', orderSchema);

export default Order;