import jwt from "jsonwebtoken";
import adminModel from "../models/adminModel.js";   // <-- Import your Admin model

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        // 1. Token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.json({ success: false, message: 'Not Authorized. Login again.' });
        }

        const token = authHeader.split(" ")[1];

        // 2. Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // decoded = { id: "...", iat:..., exp:... }

        // 3. Check admin in database
        const admin = await adminModel.findById(decoded.id);

        if (!admin) {
            return res.json({ success: false, message: "Admin not found. Unauthorized." });
        }

        // 4. Attach admin to request
        req.admin = admin;

        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Invalid or expired token." });
    }
};

export default authAdmin;
