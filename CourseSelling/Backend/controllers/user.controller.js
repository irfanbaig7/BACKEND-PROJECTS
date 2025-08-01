import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken"
import config from "../config.js";



export const signupUser = async (req, res) => {
    const userSchema = z.object({
        username: z.string().min(3, "Username must be at least 3 characters"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(8, "Password must be at least 8 characters"),
    });

    const validatedData = userSchema.safeParse(req.body);

    if (!validatedData.success) {
        return res.status(400).json({
            error: validatedData.error.issues.map((err) => err.message),
        });
    }

    const { username, email, password } = validatedData.data;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "Signup successful 🎉",
            user: {
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });

        console.log("✅ User signed up:", newUser.email);
    } catch (error) {
        console.error("❌ Error in signupUser:", error);
        res.status(500).json({
            error: "Something went wrong. Inside signUp User.",
        });
    }
};


export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        const currentUserPass = await bcrypt.compare(password, user.password)
        if (!user || !currentUserPass) {
            return res.status(403).json({ error: "Invalid Credentials" }) // passing wrong data
        }

        // using here JWT
        const token = jwt.sign({ id: user._id }, config.jwtUserPassword)

        // also store in cookies our token
        res.cookie("jwt", token)

        res.status(201).json({ message: `${user.username} was Login Successfully 😸`, user, token}) // 201 means fullfil data
        console.log(user.username, "😎 was Login SuccessFully.." );
    } catch (error) {
        console.log(error, "Error comes into vai creating login");
        res.status(500).json({
            error: "Something went wrong. inside LoginUser",
        });
    }
}

export const logoutUser = async (req, res) => {
 try {
    res.clearCookie("jwt")
    res.status(200).json({message: "Logout Successfully"})
 } catch (error) {
    res.status(500).json({error: "Error inside Logout controller"})
    console.log(error,"Something went wrong, Inside Logout User"); 
 }
} 
 