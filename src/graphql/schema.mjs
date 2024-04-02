// Utils
import { buildSchema } from "graphql";

// Resolvers
import { hello } from "./resolvers/blog.mjs";
import { loginUser, registerUser } from "./resolvers/auth.mjs";

const schema = buildSchema(`
    input RegisterUserInput {
        username: String!
        email: String!
        password: String!
    }

    input LoginUserInput {
        identifier: String!
        password: String!
    }

    type AuthResult {
        jwt: String
    }

    type Query {
        hello: String
    }

    type Mutation {
        registerUser(input: RegisterUserInput): Boolean
        loginUser(input: LoginUserInput): AuthResult
    }

    schema {
        query: Query
        mutation: Mutation
    }
`)

const rootResolver = {
    // Queries
    hello: hello,
    // Mutations
    registerUser: registerUser,
    loginUser: loginUser
} 

export { rootResolver, schema }