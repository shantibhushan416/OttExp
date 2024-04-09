import bcrypt from "bcrypt";
import _ from "lodash";
import User from "../model/userSchema.js";

const secretKey = "PrivateKey";

{/*---------Sign Up User --------------------------------*/ }
export const SignUpUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already exists');

        user = new User(_.pick(req.body, ["name", "email", "password"]));

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        await user.save();

        const token = user.generateAuthToken();

        res.header('Authentication', token).send({ token });

    } catch (error) {

        res.status(500).send("Error creating user");
    }

}

{/*--------------sign in User --------------------------------------*/ }

export const LoginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send('User does not exist');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid password');


        const token = user.generateAuthToken();
        res.json({ token });

    } catch (error) {
        res.status(400).send('Invalid Email / password');
    }
};