// Utils
import { buildSchema } from "graphql";

// Resolvers
import { hello } from "./resolvers/blog.mjs";

const schema = buildSchema(`
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

const rootResolver = {
    hello: hello
} 

export { rootResolver, schema }