import jwt from "jsonwebtoken";

export default (req, res, next) => {
	const authHeader = req.headers["authorization"];
	if (!authHeader) {
		return res.status(403).json({ error: "Authorization header missing" });
	}

	const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

	if (!token) {
		return res.status(403).json({ error: "Token missing" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ error: "Invalid or expired token" });
	}
};
