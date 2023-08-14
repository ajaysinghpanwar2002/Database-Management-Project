import express from 'express';
import { ServiceProvider } from '../controllers/ServiceController';
const ServiceRouter = express.Router();

ServiceRouter.get('/', ServiceProvider);

export default ServiceRouter;
