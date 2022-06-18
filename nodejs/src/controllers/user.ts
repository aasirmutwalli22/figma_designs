import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

import '../services/session'
import StatusCode from '../constants/status.codes';
import StatusMessage from '../constants/status.messages';
import User from '../models/user';
import pool from '../services/database'

//done
export function login ( req: Request, res: Response ) {
    let query = req.body as any

    let user: User = {
        username: query.username,
        password: query.password
    }

    if ( !validationResult( req ).isEmpty() ) {
        res.status( StatusCode.badRequest ).json( { error: StatusMessage.badRequest } )
    } else {
        pool.query( 'select * from admin where username=? and password=?', [ user.username, user.password ], ( error, result ) => {
            if ( error ) {
                console.log( error )
                res.status( StatusCode.internalError ).json( { error: StatusMessage.internalError } )
            } else if ( result.length <= 0 ) {
                res.status( StatusCode.notFound ).json( { error: StatusMessage.notFound } )
            } else {
                req.session.loggedIn = true
                req.session.user = user
                res.status( StatusCode.ok ).json( { message: 'login succesfull', data: user } )
            }
        } )
    }
}

//done
export function register ( req: Request, res: Response ) {
    let query = req.body as any

    let user: User = {
        username: query.username,
        password: query.password,
        email: query.email,
        mobile: query.mobile
    }

    if ( !validationResult( req ).isEmpty() ) {
        res.status( StatusCode.badRequest ).json( { error: StatusMessage.badRequest } )
    } else {
        pool.query( 'select * from admin where username=? or email=?', [ user.username, user.email ], ( error, result ) => {
            if ( error ) {
                res.status( StatusCode.internalError ).json( { error: StatusMessage.internalError } )
            } else if ( result.length > 0 ) {
                res.status( StatusCode.created ).json( { message: 'user already exists' } )
            } else {
                pool.query( 'insert into admin set ?', user, error => {
                    if ( error ) {
                        console.log( error )
                        res.status( StatusCode.internalError ).json( { error: StatusMessage.internalError } )
                    } else {
                        req.session.loggedIn = true
                        req.session.user = user
                        res.status( StatusCode.ok ).json( { message: 'register successfull' } )
                    }
                } )
            }
        } )
    }
}

//pending get specified user
export function getUser ( req: Request, res: Response ) {
    let username = req.query.username

    let requestValid = username !== undefined

    if ( validationResult( req ).isEmpty() ) {
        res.status( StatusCode.notImplemented )
            .json( { error: StatusMessage.notImplemented } )
    } else {
        res.status( StatusCode.badRequest )
            .json( { error: StatusMessage.badRequest } )
    }
}

//pending get all users
export function getUsers ( req: Request, res: Response ) {
    res.status( StatusCode.notImplemented )
        .json( { error: StatusMessage.notImplemented } )
    // if (req.session.loggedIn) {
    // } else {
    //     res.status(StatusCode.unAuthorised)
    //         .json({ error: StatusMessage.unAuthorised })
    // }

}

//pending
export function updateUser ( req: Request, res: Response ) {
    let username = req.query.username

    let requestValid = username !== undefined

    if ( validationResult( req ).isEmpty() ) {
        res.status( StatusCode.notImplemented )
            .json( { error: StatusMessage.notImplemented } )
    } else {
        res.status( StatusCode.badRequest )
            .json( { error: StatusMessage.badRequest } )
    }
}

//pending
export function deleteUser ( req: Request, res: Response ) {
    let username = req.query.username

    let requestValid = username !== undefined

    if ( validationResult( req ).isEmpty() ) {
        res.status( StatusCode.notImplemented )
            .json( { error: StatusMessage.notImplemented } )
    } else {
        res.status( StatusCode.badRequest )
            .json( { error: StatusMessage.badRequest } )
    }
}

//pending
export function info ( req: Request, res: Response ) {
    if ( req.session.loggedIn === true ) {
        res.status( 200 ).json( { message: 'active session', data: req.session.user } )
    } else {
        res.status( 200 ).json( { message: 'no session' } )
    }
}

//done
export function logout ( req: Request, res: Response ) {
    res.status( 200 ).json( { message: 'session cleared' } )
}