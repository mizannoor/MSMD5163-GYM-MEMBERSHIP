import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import entityRoutes from "./routes/entities.route.js";
import authMiddleware from "./middleware/auth.middleware.js";
import { connectToDatabase, disconnectFromDatabase } from "./shared/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use("/api", authMiddleware, entityRoutes);

// MongoDB Connection
connectToDatabase();

app.listen(PORT, '0.0.0.0', () => console.log(`Authentication Service running on port ${PORT}`));

process.on("SIGINT", async () => {
	await disconnectFromDatabase();
	process.exit(0);
});