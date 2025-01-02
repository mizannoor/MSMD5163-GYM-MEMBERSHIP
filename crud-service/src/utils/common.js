import User from "../models/user.model.js";

/**
 * Fetches the email address of a user by their user ID.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<string>} - The email address of the user.
 * @throws {Error} - If the user is not found.
 */
export const getUserEmail = async (userId) => {
	try {
		const user = await User.findById(userId);
		if (!user) {
			throw new Error("User not found");
		}
		return user.email;
	} catch (error) {
		console.error("Error fetching user email:", error.message);
		throw error;
	}
};
