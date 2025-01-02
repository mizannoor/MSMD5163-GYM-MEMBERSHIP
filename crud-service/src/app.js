import express from "express";
import dotenv from "dotenv";
import entityRoutes from "./routes/entities.route.js";
import authMiddleware from "./middleware/auth.middleware.js";
import { connectToDatabase, disconnectFromDatabase } from "./shared/database.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use("/api", authMiddleware, entityRoutes);

// MongoDB Connection
connectToDatabase();

app.listen(PORT, () => console.log(`Authentication Service running on port ${PORT}`));

process.on("SIGINT", async () => {
	await disconnectFromDatabase();
	process.exit(0);
});