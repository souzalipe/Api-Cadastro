import express from 'express';
import { userRouter } from './src/router/user.router.js';

const app = express();

app.use(express.json()); // -> middlewear de conversão para json 

app.use(userRouter);

const Port = 3000;

app.listen(Port, () => {
    console.log(`Aplication ready on port  http://localhost:${Port}`);
});