import formData from "form-data";
import Mailgun from "mailgun.js";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

// Initialize Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
	username: "api",
	key: process.env.MAILGUN_API_KEY,
	// headers: { 	"Content-Type": "application/x-www-form-urlencoded", },
});

export default mg;
