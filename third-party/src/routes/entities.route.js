// Directory: crud-service
import express from "express";
import { sendEmail } from "../controllers/notification.controller.js";

const router = express.Router();

// Notification Routes
// Route for sending email notifications
router.post("/send-email", sendEmail);

export default router;
