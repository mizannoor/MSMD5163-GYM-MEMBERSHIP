// Express app setup

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import entities from "./routes/entities.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use("/api", entities);

// Start the server
app.listen(PORT, '0.0.0.0', () => {
	console.log(`Third-party service running on port ${PORT}`);
});

