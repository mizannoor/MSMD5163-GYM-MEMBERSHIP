// Express app setup

import express from "express";
import dotenv from "dotenv";
import entities from "./routes/entities.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", entities);

// Start the server
app.listen(PORT, () => {
	console.log(`Third-party service running on port ${PORT}`);
});

