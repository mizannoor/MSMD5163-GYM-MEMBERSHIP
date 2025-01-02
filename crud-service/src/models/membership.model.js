import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const membershipSchema = new mongoose.Schema(
	{
		membership_id: { type: String, required: true, unique: true, default: uuidv4 },
		user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
		plan_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Plan" },
		start_date: { type: Date, required: true },
		end_date: { type: Date, required: true },
		status: { type: String, required: true, enum: ["Active", "Inactive", "Cancelled"] },
	},
	{ timestamps: true }
);

export default mongoose.model("Membership", membershipSchema);
