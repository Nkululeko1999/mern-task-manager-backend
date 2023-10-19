import express from "express";
import { createTask, getTask, getTasks, deleteTask, replaceTask, updateTask, deleteAll } from "../controllers/tasks.controller.js";

const router = express.Router();

router.get('', getTasks);
router.get('/:id', getTask);
router.post('', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', replaceTask);
router.patch('/:id', updateTask);
router.delete('/', deleteAll);

export default router;