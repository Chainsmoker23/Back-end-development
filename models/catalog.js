import mongoose from "mongoose";

const catalogSchema = new mongoose.Schema({
    seller:{
        type:String,
        ref:'User',
        // fill here on your choice

    },
  
    products:
    [{name:String,
     price:Number,
    
    }],

});

const Catalog = mongoose.model('Catalog', catalogSchema);

export default Catalog;