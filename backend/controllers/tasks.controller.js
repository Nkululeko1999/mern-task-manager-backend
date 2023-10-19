import { Task } from "../models/task.model.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json(`No task ${id} found`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json(`No task ${id} found`);
        }
        res.status(200).send(`Deleted task with ${id}`)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const replaceTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ message: `No task ${id} found` });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(
            { _id: id },
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({ message: `No task ${id} found` });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAll = async (req, res) => {
    try {
        const deleteDocs = await Task.deleteMany();
        res.status(200).json({message: 'Deleted all tasks.'})
      } catch (err) {
        res.status(500).json({ message: error.message });
      }
      
}