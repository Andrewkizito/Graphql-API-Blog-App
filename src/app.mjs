import cors from "cors";
import express from "express";
import { rootResolver as rootValue, schema } from "./graphql/schema.mjs";
import { createHandler } from "graphql-http/lib/use/express";
import initDatabase from "./config/database.mjs";
import env from "./config/env.mjs";

// Intialize server
const server = express()

// Add cors to server
server.use(cors({
    origin: "*",
    allowedHeaders: "*",
    methods: "*"
}))

// Initialize graphql handler
server.all("/graphql", createHandler({
    rootValue,
    schema,
}))

// Server server
server.listen(env.PORT, () => {
    console.log("Server started on port 3000")
    initDatabase()
})