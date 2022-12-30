import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// all routes in here start with /users
router.get('/', getUsers)

// send to database
router.post('/', createUser)

// users/2 => req.params {id: 2}

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;