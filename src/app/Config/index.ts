import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL,
  jwt_access_secret:process.env.jWT_ACCESS_SECRET,
  bcrypt_salt_round:process.env.BCRYPT_SALTROUND
};
