// Notification model
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const notificationSchema = new mongoose.Schema(
	{
		notification_id: { type: String, required: true, unique: true, default: uuidv4 },
		user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" }, // Internal MongoDB reference
		message: { type: String, required: true }, // Notification message
		type: { type: String, required: true, enum: ["Email", "SMS", "Push"] }, // Notification type
		created_at: { type: Date, default: Date.now }, // Auto-generated timestamp
	},
	{ timestamps: false } // Explicitly disabling Mongoose's default timestamps
);

export default mongoose.model("Notification", notificationSchema);
