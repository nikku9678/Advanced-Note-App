import bcrypt from "bcrypt";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/user.js";
import { sendCookie } from "../utils/feature.js";

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide email ,password and role."));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password.", 400));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email Or Password.", 400));
  }

  sendCookie(user, 201, res, "User Logged In!");
};
export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return next(new ErrorHandler("Please fill full form!"));
  }
  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already registered!"));
  }
  const user = await User.create({
    name,
    email,

    password,
  });
  sendCookie(user, 201, res, "User Registered!");
};
export const updateUserProfile = async (req, res, next) => {
  try {
    const userId =req.user._id;
    console.log(userId)
    const { name, address, phone } = req.body;
    if (!name || !address || !phone) {
      return next(new ErrorHandler("Please fill full form!"));
    }
    const user = await User.findByIdAndUpdate(
      userId,
      { ...req.body },
      { new: true }
    );
    if (!user) return next(new ErrorHandler("user not found", 404));
    
    await user.save();

    res.status(200).json({
      success: true,
      message: "note Updated!",
      user,
    });
  } catch (error) {
    next(error);
  }
};
export const getUserProfile = (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
};

export const logoutUser = (req, res) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully.",
    });
};
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
