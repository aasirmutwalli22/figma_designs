import { createPool } from 'mysql';

import poolConfig from '../constants/pool';

const pool = createPool(poolConfig)

export default pool;