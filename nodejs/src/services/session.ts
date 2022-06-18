import "express-session";
import User from "../models/user";
import {NextFunction, Request, Response} from 'express'
import statusCodes from "../constants/status.codes";

declare module 'express-session' {
    interface SessionData {
        loggedIn: boolean,
        user: User
    }
}
// function controller(req: Express.Request, res: Express.Response) {
//     req.session.loggedIn;
// }

export let saveSession = (req: Request, user: User) => {
    req.session.loggedIn = true
    req.session.user = user
}

export let checkSession = (req: Request, res: Response, next: NextFunction) => {
    if(req.session.loggedIn){
        next(true)
    } else {
        res.status(statusCodes.unAuthorised)
    }
}

export let destroySession = (req: Request, res: Response, next: NextFunction) => {
    req.session.destroy(error => {})
    next()
}