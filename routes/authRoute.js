import express from "express";
import { registercontroller,loginController, testController } from '../controllers/authcontroller.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//Router object

const router = express.Router();

//Routing 
//Register || method POST

router.post("/register", registercontroller,);

// method || post || login 

router.post("/login", loginController)

// test route

router.get("/test", requireSignIn, isAdmin ,testController)

export default router;

