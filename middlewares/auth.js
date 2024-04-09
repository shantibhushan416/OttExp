import jwt from "jsonwebtoken";


export const authMiddleware = () => {
    return async (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) return res.status(401).send('No token provided');


        try {
            const decoded = jwt.verify(token, "PrivateKey");
            req.user = decoded;
            next();
        } catch (error) {
            res.status(400).send("Invalid token, please login again")
        }
    }
};