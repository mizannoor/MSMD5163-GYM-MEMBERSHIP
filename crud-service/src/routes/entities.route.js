// Directory: crud-service

// src/routes/entities.route.js
import express from "express";
import { createUser, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { createMembership, getMembership, updateMembership, deleteMembership } from "../controllers/membership.controller.js";
import { createPlan, getPlan, updatePlan, deletePlan } from "../controllers/plan.controller.js";
import { createPayment, getPayment, updatePayment, deletePayment } from "../controllers/payment.controller.js";
import { createNotification, getNotification, updateNotification, deleteNotification } from "../controllers/notification.controller.js";
import { createLog, getLog, updateLog, deleteLog } from "../controllers/log.controller.js";

const router = express.Router();

// User Routes
router.post("/users", createUser);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

// Membership Routes
router.post("/memberships", createMembership);
router.get("/memberships/:id", getMembership);
router.put("/memberships/:id", updateMembership);
router.delete("/memberships/:id", deleteMembership);

// Plan Routes
router.post("/plans", createPlan);
router.get("/plans/:id", getPlan);
router.put("/plans/:id", updatePlan);
router.delete("/plans/:id", deletePlan);

// Payment Routes
router.post("/payments", createPayment);
router.get("/payments/:id", getPayment);
router.put("/payments/:id", updatePayment);
router.delete("/payments/:id", deletePayment);

// Notification Routes
router.post("/notifications", createNotification);
router.get("/notifications/:id", getNotification);
router.put("/notifications/:id", updateNotification);
router.delete("/notifications/:id", deleteNotification);

// Log Routes
router.post("/logs", createLog);
router.get("/logs/:id", getLog);
router.put("/logs/:id", updateLog);
router.delete("/logs/:id", deleteLog);

export default router;
