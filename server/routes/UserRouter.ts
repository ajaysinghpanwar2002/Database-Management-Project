import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/UserController';

const UserRouter = express.Router();

UserRouter.get('/', getUsers);
UserRouter.post('/', createUser);
UserRouter.put('/:id', updateUser);
UserRouter.delete('/:id', deleteUser);

export default UserRouter;
