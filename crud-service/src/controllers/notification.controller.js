// Notification controller
import Notification from "../models/notification.model.js";
import { sendNotification } from "../utils/third-party-client.js";

export const createNotification = async (req, res) => {
	try {
		const { user_id, email, message, type } = req.body;

		// Save notification record in the database
		const notification = new Notification({ user_id, email, message, type });
		await notification.save();

		// Call the third-party service to send the email
		const emailResponse = await sendNotification(email, message);

		res.status(201).json({ notification, emailStatus: emailResponse });
	} catch (error) {
		console.error("Failed to create notification:", error.message);
		res.status(500).json({ error: "Failed to create and send notification" });
	}
};

export const getNotification = async (req, res) => {
	try {
		const notification = await Notification.findById(req.params.id);
		if (!notification) return res.status(404).json({ error: "Notification not found" });
		res.status(200).json(notification);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updateNotification = async (req, res) => {
	try {
		const notification = await Notification.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!notification) return res.status(404).json({ error: "Notification not found" });
		res.status(200).json(notification);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const deleteNotification = async (req, res) => {
	try {
		const notification = await Notification.findByIdAndDelete(req.params.id);
		if (!notification) return res.status(404).json({ error: "Notification not found" });
		res.status(200).json({ message: "Notification deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
