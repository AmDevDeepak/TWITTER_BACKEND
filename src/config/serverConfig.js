import dotenv from "dotenv";
dotenv.config();
export const config = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  AWS_REGION: process.env.AWS_REGION,
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  BUCKET_NAME: process.env.BUCKET_NAME,
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
};
