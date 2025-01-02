import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new mongoose.Schema(
	{
		user_id: { type: String, required: true, unique: true, default: uuidv4 },
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password_hash: { type: String, required: true },
		role: { type: String, required: true, enum: ["Admin", "Trainer", "Member"] },
	},
	{ timestamps: true }
);

export default mongoose.model("User", userSchema);
