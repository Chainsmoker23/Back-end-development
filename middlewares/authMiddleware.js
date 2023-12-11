import Jwt  from "jsonwebtoken";
import usermodel from "../models/usermodel.js";


export const requireSignIn = async (req ,res, next)=>{

    try {
        const decode = Jwt.verify(req.headers.authorization, process.env.JWT_SECRET
    );
req.user = decode;
        next();

    } catch (error) {
        console.log(error);
    }
};
//Demo Admin access || please ingore this section || this section actully made for testing ...back-end developer Divesh 

export const isAdmin = async (req ,res ,next) => {

    try {
      const user = await usermodel.findById(req.user._id)
        if(user.role !==1){
            return res.status(401).send({
                success: false,
                message:'UnAuthorized Access'
            })
        } else{
            next()
        }
    } catch (error) {
      console.log(error) 
              res.status(401).send({
        success:false,
               error,
        message:'Error in admin  middleware'
      })
    }
};