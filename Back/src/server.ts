import express, { Request, Response } from 'express';
import bodyparser from 'body-parser';
const cors = require('cors')
const db = require('./database/index')
const userRouter = require('./routes/userrouter');
const app = express();

app.use(express.json());
app.use((req:Request, res:Response, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    app.use(cors());
    next()
});


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/user', userRouter);
app.listen(3333);
