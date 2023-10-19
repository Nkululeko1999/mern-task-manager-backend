import express from "express";
import { connectDB } from "./config/connectDB.js";
import taskRoutes from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();
const port =  process.env.PORT || 5000;

app.use(cors({
   origin: 'https://mern-task-app.onrender.com',
   methods: 'GET,POST,PUT,DELETE',
   allowedHeaders: 'Content-Type,Authorization',
   credentials: true,
 }));
app.use(express.json());
app.use('/api/tasks', taskRoutes);

const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

startServer(); 



