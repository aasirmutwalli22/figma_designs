import { body, param } from 'express-validator';

export const getUserValidator = [
    param('username', 'username does not exists').exists(),
]

export const updateValidator = [
    param('username', 'username does not exists').exists(),
]

export const deleteValidator = [
    param('username', 'username does not exists').exists(),
]

export const loginValidator = [
    body('username', 'username does not exists').exists(),
    body('password', 'invalid password').exists().isLength({ min: 5 })
]

export const registerValidator = [
    body('username', 'username does not exists').exists(),
    body('email', 'invalid email').exists().isEmail(),
    body('mobile', 'invalid mobile').exists().isInt(),
    body('password', 'invalid password').exists().isLength({ min: 5 })
]
