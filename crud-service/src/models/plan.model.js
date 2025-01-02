import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const planSchema = new mongoose.Schema(
	{
		plan_id: { type: String, required: true, unique: true, default: uuidv4 },
		name: { type: String, required: true },
		price: { type: Number, required: true },
		duration: { type: String, required: true },
	},
	{ timestamps: true }
);

export default mongoose.model("Plan", planSchema);
