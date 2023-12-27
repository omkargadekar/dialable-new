import { User } from "../../../src/models/userModel";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// Use the cookie-parser middleware
app.use(cookieParser());

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating access token:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: " email is required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid user credentials" });
    }

    try {
      const { accessToken, refreshToken } =
        await generateAccessAndRefreshTokens(user._id);

      const loggedInUser = await User.findById(user._id).select(
        "-password -refreshToken -emailVerificationToken -emailVerificationExpiry"
      );

      const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      };

      console.log(res.cookie());

      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          status: 200,
          data: {
            user: loggedInUser,
            accessToken,
            refreshToken,
          },
          message: "User logged in successfully",
        });
    } catch (error) {
      console.error("Error logging in user:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
