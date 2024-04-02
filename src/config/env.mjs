import dotenv from "dotenv"

// Load env
dotenv.config()

const env = {
    DB_URI: process.env.DB_URI,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET
}

export default env