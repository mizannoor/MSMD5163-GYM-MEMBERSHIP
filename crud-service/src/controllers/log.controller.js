// Log controller
import Log from "../models/log.model.js";

export const createLog = async (req, res) => {
	try {
		const log = new Log(req.body);
		await log.save();
		res.status(201).json(log);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getLog = async (req, res) => {
	try {
		const log = req.params?.id ? await Log.findById(req.params.id) : await Log.find();
		if (!log) return res.status(404).json({ error: "Log not found" });
		res.status(200).json(log);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updateLog = async (req, res) => {
	try {
		const log = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!log) return res.status(404).json({ error: "Log not found" });
		res.status(200).json(log);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const deleteLog = async (req, res) => {
	try {
		const log = await Log.findByIdAndDelete(req.params.id);
		if (!log) return res.status(404).json({ error: "Log not found" });
		res.status(200).json({ message: "Log deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
