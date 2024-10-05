/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middleware/notFound';
import router from './app/routes';
import globalErrorHandler from './app/middleware/GlobalErrorHandler';

const app: Application = express();

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors({ credentials: true, origin: '*' }));
app.use(cors({ credentials: true, origin: ['https://bike-management-dash.web.app'] }))
app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

//application routes
app.use('/api', router);

//global Error Handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
