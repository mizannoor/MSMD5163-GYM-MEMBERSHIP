import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import { connectToDatabase, disconnectFromDatabase } from "./shared/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// MongoDB Connection
connectToDatabase();

app.listen(PORT, '0.0.0.0', () => console.log(`Authentication Service running on port ${PORT}`));

process.on("SIGINT", async () => {
	await disconnectFromDatabase();
	process.exit(0);
});