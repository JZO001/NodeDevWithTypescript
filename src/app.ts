import express, { Request, Response, Application } from 'express';
const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World2!');
});

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
