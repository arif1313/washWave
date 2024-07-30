import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  Node_env: process.env.Node_env,
  Port: process.env.PORT,
  DB_URL: process.env.MONGO_URL,
  SOLT_Round: process.env.Bcript_solt_round,
  Jwt_secret: process.env.JWT_SECRET,
};
