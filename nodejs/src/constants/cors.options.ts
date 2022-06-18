import { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
    origin: [ 'http://127.0.0.1:5500',
        'http://127.0.0.1:3000',
        'http://localhost:3000',
        '*' ],
    credentials: true
}

export default corsOptions