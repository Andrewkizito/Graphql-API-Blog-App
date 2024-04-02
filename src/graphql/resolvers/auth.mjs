import { authenticateUser, createUser } from "../../utils/auth.mjs"

async function registerUser(args) {
    await createUser(args.input)

    return true
}

async function loginUser(args) {
    const res = await authenticateUser(args.input)

    return res
}

export { registerUser, loginUser }