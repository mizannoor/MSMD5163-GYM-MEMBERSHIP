// User controller
import User from "../models/user.model.js";

export const createUser = async (req, res) => {
	try {
		const user = new User(req.body);
		await user.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ error: "User not found" });
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!user) return res.status(404).json({ error: "User not found" });
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) return res.status(404).json({ error: "User not found" });
		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
