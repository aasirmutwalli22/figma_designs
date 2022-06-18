import { PoolConfig } from "mysql";

const poolConfig: PoolConfig = {
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bmc'
}
export default poolConfig