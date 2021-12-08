import express from 'express';
import bodyparser from 'body-parser';
const db = require('./database/index')
const userRouter = require('./routes/userrouter');
const app = express();

app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/user', userRouter);
app.listen(3333);
