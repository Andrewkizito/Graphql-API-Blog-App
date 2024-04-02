// Utils
import { buildSchema } from "graphql";

// Resolvers
import { hello } from "./resolvers/blog.mjs";
import { registerUser } from "./resolvers/auth.mjs";

const schema = buildSchema(`
    input RegisterUserInput {
        username: String!
        email: String!
        password: String!
    }

    type Query {
        hello: String
    }

    type Mutation {
        registerUser(input: RegisterUserInput): Boolean
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`)

const rootResolver = {
    // Queries
    hello: hello,
    // Mutations
    registerUser: registerUser
} 

export { rootResolver, schema }