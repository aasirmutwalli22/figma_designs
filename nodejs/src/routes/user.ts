import { Router } from "express"

import { limit1RequestIn10Sec } from "../constants/rate.limiter"
import { deleteUser, info, login, logout, register, updateUser } from "../controllers/user"
import { destroySession } from "../services/session"
import { deleteValidator, loginValidator, registerValidator, updateValidator } from "../validators/user"

let router = Router()

//get all users
// router.get('/', getUsers)

//get user details
// router.get('/:username', getUserValidator, getUser)

//put (update) user
router.put( '/:username', updateValidator, updateUser )

//delete user
router.delete( '/:username', deleteValidator, deleteUser )

// post login user
router.post( '/login', loginValidator, login )

//post register user
router.post( '/register', registerValidator, register )

//get //check user info
router.get( '/check', limit1RequestIn10Sec, info )

//get //logout
router.get( '/logout', destroySession, logout )

export default router