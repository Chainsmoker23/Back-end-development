
//||| ========== This authenticator reserved for Emergency ==========  |||



/*import jwt from 'jsonwebtoken';

export const authenticator = (req ,res)=>{
    
    const authToken = req.headers.authorization;

    if (!authToken){
        return res.status(401).json({message:'Authorization token required'});
    }
    try{
        const decodedToken = jwt.verify(authToken,`${process.env.JWT_SECRET}` );
        req.user = decodedToken;
        next();
    }catch (error){
        res.status(401).json({message:'Invaild authorization'})
    };
    
}*/