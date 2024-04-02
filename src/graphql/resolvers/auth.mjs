import { createUser } from "../../utils/auth.mjs"

/**
 * 
 * @param {Object} args An object containing the input passed into the register user Query
 * @param {Object} args.input An object containing the params of the user to be registered
 * @param {String} args.input.username Username of the user to be registered
 * @param {String} args.input.email Email of the user to be registered
 * @param {String} args.input.password Password of the user to be registered
 * @returns 
 */
async function registerUser(args) {
    await createUser(args.input)

    return true
}

export { registerUser }