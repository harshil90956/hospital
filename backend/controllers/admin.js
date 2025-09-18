import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Admin from "../models/adminModel.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await Admin.findOne({ email: "admin@prescripto.com" });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists");
      process.exit();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("supersecret123", salt);

    const admin = new Admin({
      name: "Main Admin",
      email: "admin@prescripto.com",
      password: hashedPassword,
    });

    await admin.save();
    console.log("✅ Admin created successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error creating admin:", error.message);
    process.exit(1);
  }
};

createAdmin();
