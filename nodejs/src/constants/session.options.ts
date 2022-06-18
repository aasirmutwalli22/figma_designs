import session, { MemoryStore, SessionOptions } from "express-session";
import Duration from "../models/duration";
// import createMemoryStore from 'memorystore';
// const MemoryStore = createMemoryStore( session )
const memorystore = new MemoryStore()

const sessionOptions: SessionOptions = {
    secret: 'secreate!session',
    // store: new MemoryStore( { checkPeriod: new Duration( { seconds: 10 } ).toMillis() } ),
    saveUninitialized: false,
    resave: false,
    cookie: { secure: false, sameSite: 'none', maxAge: new Duration( { seconds: 60 } ).inMillis }, //session for 10 min
}

export default sessionOptions