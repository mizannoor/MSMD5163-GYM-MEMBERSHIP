import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const thirdPartyClient = axios.create({
	baseURL: process.env.THIRD_PARTY_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const sendNotification = async (email, message) => {
	try {
		const response = await thirdPartyClient.post("/send-email", {
			email,
			message,
		});
		return response.data;
	} catch (error) {
		console.error("Error invoking third-party service:", error.response?.data || error.message);
		throw new Error("Failed to send notification");
	}
};
