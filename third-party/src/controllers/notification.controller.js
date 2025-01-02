import Notification from "../models/notification.model.js";
import mg from "../utils/mailgun.helper.js";

export const sendEmail = async (req, res) => {
	try {
		const { email, message } = req.body;

		// Send email via Mailgun
		const response = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
			from: `Gym Membership <${process.env.MAILGUN_FROM_EMAIL}>`,
			to: Array.isArray(email) ? email : [email],
			subject: "Gym Membership Notification",
			text: message,
			html: `<h1>${message}</h1>`,
		});

		res.status(200).json({ message: "Email sent successfully", response });
	} catch (error) {
		console.error("Mailgun error:", error);
		// res.status(500).json({ error: "Failed to send email notification", details: error.message });
		// Handle non-JSON errors
		const errorMessage = error?.response?.body || error?.response?.text || error.response;
		res.status(500).json({ error: "Failed to send email notification", details: errorMessage });
	}
};
