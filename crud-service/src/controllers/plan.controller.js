// Plan controller
import Plan from "../models/plan.model.js";

export const createPlan = async (req, res) => {
	try {
		const plan = new Plan(req.body);
		await plan.save();
		res.status(201).json(plan);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getPlan = async (req, res) => {
	try {
		const plan = await Plan.findById(req.params.id);
		if (!plan) return res.status(404).json({ error: "Plan not found" });
		res.status(200).json(plan);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updatePlan = async (req, res) => {
	try {
		const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!plan) return res.status(404).json({ error: "Plan not found" });
		res.status(200).json(plan);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const deletePlan = async (req, res) => {
	try {
		const plan = await Plan.findByIdAndDelete(req.params.id);
		if (!plan) return res.status(404).json({ error: "Plan not found" });
		res.status(200).json({ message: "Plan deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
