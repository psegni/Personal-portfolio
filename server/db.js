import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "0000",
  database: process.env.DB_NAME || "portfolio_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
