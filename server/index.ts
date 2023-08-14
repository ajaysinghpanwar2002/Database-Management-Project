import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { getConnectedDb } from './db';
import ServiceRouter from './routes/ServiceRouter';
import UserRouter from './routes/UserRouter';

dotenv.config();
const app: Express = express();

(async () => {
    const db = await getConnectedDb();
    const port = process.env.PORT || 8000;

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use("/", ServiceRouter);
    app.use("/users", UserRouter);
    app.locals.db = db;

    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
})();
