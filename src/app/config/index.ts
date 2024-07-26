import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  Port: process.env.PORT,
  DB_URL: process.env.MONGO_URL,
  SOLT_Round: process.env.Bcript_solt_round,
};
