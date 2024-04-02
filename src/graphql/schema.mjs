// Utils
import { buildSchema } from "graphql";

// Resolvers
import { hello } from "./resolvers/blog.mjs";

export const schema = buildSchema(`
    type TestData {
        action: String!
        message: String!
    }

    type Query {
        hello: TestData
    }

    schema {
        query: Query
    }
`)

export const rootResolver = {
    hello: hello
} 