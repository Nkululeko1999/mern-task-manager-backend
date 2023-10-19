import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a task"],
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
})

export const Task = mongoose.model('Task', taskSchema);