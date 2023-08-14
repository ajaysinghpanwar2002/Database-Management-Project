import { Request, Response } from 'express';
import { User } from '../models/users';

async function getUsers(req: Request, res: Response) {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (e) {
        console.log(e);
        res.status(500).send('Error in user controller.');
    }
}

async function createUser(req: Request, res: Response) {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (e) {
        console.log(e);
        res.status(500).send('Error in user controller.');
    }
}

async function updateUser(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const newAge = req.body.age;
        const updatedUser = await User.findOneAndUpdate(
            { _id: id },
            { age: newAge },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating user.');
    }
}

async function deleteUser(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting user.');
    }
}

export { getUsers, createUser, updateUser, deleteUser };
