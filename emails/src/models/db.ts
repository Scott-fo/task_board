import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
  host: "email_subscription_db",
});

export { pool };
