// Membership controller
import Membership from "../models/membership.model.js";
import { sendNotification } from "../utils/third-party-client.js";
import { getUserEmail } from "../utils/common.js";

export const createMembership = async (req, res) => {
	try {
		const membership = new Membership(req.body);
		await membership.save();
		res.status(201).json(membership);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getMembership = async (req, res) => {
	try {
		const membership = await Membership.findById(req.params.id);
		if (!membership) return res.status(404).json({ error: "Membership not found" });
		res.status(200).json(membership);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updateMembership = async (req, res) => {
	try {
		const membership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!membership) return res.status(404).json({ error: "Membership not found" });

		// Notify the user of the membership update
		const userEmail = await getUserEmail(membership.user_id);
		const response = await sendNotification({
			email: userEmail,
			message: `Your membership has been updated to: ${membership.status}.`,
		});

		res.status(200).json({
			membership,
			emailStatus: response.data,
		});
	} catch (error) {
		console.error("Error updating membership:", error.response?.data || error.message);
		res.status(500).json({ error: "Failed to update membership and send notification" });
	}
};

export const deleteMembership = async (req, res) => {
	try {
		const membership = await Membership.findByIdAndDelete(req.params.id);
		if (!membership) return res.status(404).json({ error: "Membership not found" });
		res.status(200).json({ message: "Membership deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
