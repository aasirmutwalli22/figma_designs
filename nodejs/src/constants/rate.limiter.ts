import rateLimit from "express-rate-limit";
import Duration from "../models/duration";

const limit1RequestIn10Sec = rateLimit( {
    windowMs: new Duration( { seconds: 10 } ).inMillis, // 10 seconds
    max: 1, //limit each ip to 1 request per window(here 10 seconds)
    standardHeaders: true,
    legacyHeaders: false,
} )

export { limit1RequestIn10Sec }