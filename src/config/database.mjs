import pg from "pg-promise"
import env from "./env.mjs"
import DB_TABLES from "./db_tables.mjs"

const pgInit = pg()
const db = pgInit(env.DB_URI)

async function initTables() {
    try {
        await Promise.all(DB_TABLES.map(table => db.oneOrNone(table)))
        console.log("Database Tables Intialized")
    } catch (error) {
        console.log(error)
    }
}

async function initDatabase() {
    try {
        await db.one('SELECT $1 AS VALUE', [123])
        initTables()
    } catch (error) {
        console.log(error)
    }
}

export { db }

export default initDatabase