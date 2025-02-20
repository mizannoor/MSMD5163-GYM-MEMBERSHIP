// Business logic
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Assume User schema/model exists

export const test = async (req, res) => {
	const { email, password } = req.body;
	try {
		res.status(200).json({ test: "--- data ---", data: req.body });
	} catch (error) {
		res.status(500).json({ error: "Server error", cause: error });
	}
};
export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(404).json({ error: "User not found" });

		const isMatch = await bcrypt.compare(password, user.password_hash);
		if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

		const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "24h" });
		res.status(200).json({ token, userId: user._id, role: user.role });
	} catch (error) {
		res.status(500).json({ error: "Server error", cause: error });
	}
};

export const register = async (req, res) => {
	const { name, email, password, role } = req.body;
	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) return res.status(400).json({ error: "Email already in use" });

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			name,
			email,
			password_hash: hashedPassword,
			role,
		});

		await newUser.save();
		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		res.status(500).json({ error: "Server error", cause: error });
	}
};
