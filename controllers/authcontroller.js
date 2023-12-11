
import usermodel from "../models/usermodel.js";
import { comparepassword, hashpassword } from "../helpers/authhelper.js";
import Jwt from "jsonwebtoken";
import { compare } from "bcrypt";


export const registercontroller = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body

        //vaildation

        if (!name) {
            return res.send({ message: `name is required` })
        }
        if (!email) {
            return res.send({ message: `email is required` })
        }
        if (!password) {
            return res.send({ message: `password is required` })
        }
        if (!phone) {
            return res.send({ message: `address is required` })
        }
        if (!address) {
            return res.send({ message: `address is required` })
        };

        //check user
        const existinguser = await usermodel.findOne({ email })
        // existing user

        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: `Already register please login`,
            })

        }
        // register user
        const hashedpassword = await hashpassword(password)

        //save 
        const user = await new usermodel({
            name,
            email,
            phone,
            address,
            password: hashedpassword
        }).save();

        res.status(201).send({
            success: true,
            message: "user register successfully",
            user
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: `error in registration`,
            error
        })

    }
};

// POST login 

export const loginController = async (req, res) => {

    try {
const {email,password}= req.body;
//validation
if(!email||!password){
return res.status(404).send({
    success:false,
    message:'Invaild email or password'
})
};
//check user
const user = await usermodel.findOne({email})
if(!user){
    return res.status(404).send({
        success:false,
        message:'Email is nott registerd'
    })
}
const match = await comparepassword(password,user.password)
if(!match){
    return res.status(200).send({
      success:false,
      message:'Invalid Password'  
    })
}
//Token 
const token = await Jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"
});
res.status(200).send({
    success:true,
    message:'Login successfully',
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
    },
    token,
})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in login",
            error
        })

    }

};

//test controller

export const testController = (req , res) => {

    res.send('protected Route');
};