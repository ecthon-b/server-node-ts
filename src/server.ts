import express from 'express';
import { Router, Request, Response } from 'express';

const PORT = 3333;

const app = express();
const route = Router();
app.use(express.json());

// ROTAS
route.get('/', (request: Request, response: Response) => {
    response.json({message: 'Hello!'});
});

app.use(route);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🔥`);
})