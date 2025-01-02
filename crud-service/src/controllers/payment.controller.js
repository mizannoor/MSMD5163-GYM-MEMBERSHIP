// Payment controller
import Payment from "../models/payment.model.js";

export const createPayment = async (req, res) => {
	try {
		const payment = new Payment(req.body);
		await payment.save();
		res.status(201).json(payment);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getPayment = async (req, res) => {
	try {
		const payment = await Payment.findById(req.params.id);
		if (!payment) return res.status(404).json({ error: "Payment not found" });
		res.status(200).json(payment);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updatePayment = async (req, res) => {
	try {
		const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!payment) return res.status(404).json({ error: "Payment not found" });
		res.status(200).json(payment);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const deletePayment = async (req, res) => {
	try {
		const payment = await Payment.findByIdAndDelete(req.params.id);
		if (!payment) return res.status(404).json({ error: "Payment not found" });
		res.status(200).json({ message: "Payment deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
