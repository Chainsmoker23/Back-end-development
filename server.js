import express from "express";
import Colors from "color";
import dotenv from "dotenv"
import morgan from "morgan";
import bodyParser from 'body-parser';
import connectDB from "./config/db.js";
import authroutes from './routes/authRoute.js';
import buyerRoutes from './routes/buyerRoutes.js';
import sellerRoutes from './routes/sellerRoutes.js';
//import { authenticator } from "./middlewares/authenticator.js";
import cors from 'cors';

//dotenv configuretion
dotenv.config();

// database config
connectDB();

//rest object
const app = express();

//json object



// middleware
app.use(cors());
app.use(express.json())
app.use(morgan(`dev`))

app.use(bodyParser.json());
//routes
app.use("/api/auth", authroutes);
app.use('/api/buyer', authroutes ,buyerRoutes);
app.use('/api/seller', authroutes ,sellerRoutes);

// rest api
app.get('/', function (req, res) {

    res.send ("<h1> Welcom to E-commerce application UnityLabs.ai <h/>")
    res.status(200);

});

const PORT = process.env.PORT;
// listen

app.listen(PORT, () => {


    console.log(`This server is made for UnityLabs.Ai project `.bgGreen.black)
    console.log(`Made by ${process.env.divesh}`.bgBlack.white)

});