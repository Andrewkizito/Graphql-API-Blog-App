import dotenv from "dotenv"

// Load env
dotenv.config()

const env = {
    DB_URI: process.env.DB_URI,
    PORT: process.env.PORT
}

export default env