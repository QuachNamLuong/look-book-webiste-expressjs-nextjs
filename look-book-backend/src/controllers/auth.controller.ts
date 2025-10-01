import type { NextFunction, Request, Response } from "express";

export default class AuthController {
    static login = (req: Request, res: Response, next: NextFunction) => {
        const {email, password} = req.body;
        if (email === "quachnamluong@gmail.com" && password == "123456") {
            return res.status(200).json({
                token: "token",
                message : "Login successfull"
            })
        }
        res.status(401).json(
            { error: 'Invalid email or password' });
        };

    static register = (req: Request, res: Response, next: NextFunction) => {

    };
}