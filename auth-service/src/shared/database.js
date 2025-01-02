// MongoDB connection setup
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

// MongoDB connection function
const connectToDatabase = async () => {
	try {
		const dbUri = process.env.DB_URI; // Get the MongoDB URI from .env
		if (!dbUri) {
			throw new Error("DB_URI not defined in environment variables.");
		}

		await mongoose.connect(dbUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log("Connected to MongoDB successfully");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error.message);
		process.exit(1); // Exit process with failure
	}
};

// Close the database connection
const disconnectFromDatabase = async () => {
	try {
		await mongoose.disconnect();
		console.log("Disconnected from MongoDB successfully");
	} catch (error) {
		console.error("Error disconnecting from MongoDB:", error.message);
	}
};

export { connectToDatabase, disconnectFromDatabase };
