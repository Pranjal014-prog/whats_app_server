import express from "express";
import LoginSchema from "../models/LoginSchema.js";

const Login = express.Router();

Login.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await LoginSchema.findOne({email});
        console.log(user);

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
        if (password!=user.password) {
            return res.status(401).json({ error: "Password doesn't match" });
        }
        const obj={
            name: user.name,
            img: user.img
        }
        console.log(obj);
        return res.status(200).json({ message: obj });

    } catch (error) {
        return res.status(500).json({ error: "An error occurred while connecting to the server" });
    }
});

export default Login;
