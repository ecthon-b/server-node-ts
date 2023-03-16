import express from 'express';
import { Router, Request, Response } from 'express';

const app = express();
const route = Router();

const PORT = 3333;
app.use(express.json());

// GET
route.get('/', (request: Request, response: Response) => {
    response.json({message: 'Hello!'});
});

// POST
route.post('/', (request: Request, response: Response) => {
    response.json({message: 'Get a POST request'})
});

// PUT
route.put('/user', (request: Request, response: Response) => {
    response.json({message: 'Got a PUT request at /user'})
});

//DELETE
route.delete('/user', (request: Request, response: Response) => {
    response.json({message: 'Got a DELETE request at /user'})
  })

app.use(route);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🔥`);
})