import cors from 'cors'
import express from 'express'
import session from 'express-session'

import corsOptions from './constants/cors.options'
import httpPort from './constants/server.options'
import sessionOptions from './constants/session.options'
import userRouter from './routes/user'
import pool from './services/database'

pool.getConnection( ( err, connection ) => {
    if ( err ) throw err;
    console.log( 'Database connected successfully' );
    connection.release();
} );

const app = express()

app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )
app.use( cors( corsOptions ) )
app.use( session( sessionOptions ) )

app.use( '/users', userRouter )
app.use( ( _req, res ) => res.status( 404 ).json( { message: 'path not found' } ) )

app.listen( httpPort, () => console.log( `Example app listening on port ${ httpPort }` ) )