import { useEffect, useState } from "react"
import { logout, sessionCheck } from "../../apis/UserApi"
import { useNavigate } from 'react-router-dom'
import User from "../../models/user"

interface Session {
    loggedIn: boolean,
    user: User
}

export default function Home () {
    const navigate = useNavigate()
    const [ session, setSession ] = useState<Session>( { loggedIn: false, user: { username: '' } } )

    useEffect( () => {
        sessionCheck().then( data => {
            console.log( data )
            if ( data.data ) {
                setSession( {
                    loggedIn: true,
                    user: data.data
                } )
            }
            else {
                navigate( '/signin', { replace: true } )
            }
        } )
    }, [ navigate ] )

    let clearSession = () => {
        logout().then(console.log)
        navigate( '/signin', { replace: true } )
    }

    return (
        <>
            <h1>hello</h1>
            <h2>{ session.user.username }</h2>
            <h2>{ session.user.password }</h2>
            {
                session.loggedIn && <button onClick={clearSession}> logout</button> 
            } 
        </>

    )
}