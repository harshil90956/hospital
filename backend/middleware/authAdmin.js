import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";

const authAdmin = async (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ success: false, message: "Not Authorized. Login Again." });
        }

        const token = authHeader.split(" ")[1];

        // Decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Token must contain admin email
        const adminEmail = decoded.email;

        if (!adminEmail) {
            return res.status(401).json({ success: false, message: "Invalid Token" });
        }

        // Find admin in DB by email
        const admin = await adminModel.findOne({ email: adminEmail });

        if (!admin) {
            return res.status(401).json({ success: false, message: "Admin not found. Unauthorized." });
        }

        req.admin = admin; // stashing admin
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
};

export default authAdmin;
