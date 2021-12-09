import express, { Request, Response } from 'express';
import bodyparser from 'body-parser';
const cors = require('cors')
const db = require('./database/index')
const userRouter = require('./routes/userrouter');
const app = express();

app.use(express.json());
app.use((req:Request, res:Response, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next()
});


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/user', userRouter);
app.listen(3333);
