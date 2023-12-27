import { User } from "../../../src/models/userModel";
import connectDB from "../../../src/dbConfig/dbConfig";
connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, firstName, lastName, password, role } = req.body;

    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res.status(409).json({
        message: "User with email or username already exists",
      });
    }

    const user = await User.create({
      email,
      firstName,
      lastName,
      password,
      role: role || "CUSTOMER",
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
    );

    if (!createdUser) {
      return res.status(500).json({
        error: "Something went wrong while registering the user",
      });
    }

    return res.status(201).json({
      status: 200,
      data: { user: createdUser },
      message:
        "Users registered successfully and verification email has been sent on your email.",
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
