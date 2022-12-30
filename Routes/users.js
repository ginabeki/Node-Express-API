// Defining Routes using Express
import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getUsers)

// send to database
router.post('/', createUser)

// users/2 => req.params {id: 2}

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;