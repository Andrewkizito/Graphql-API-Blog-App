// DB Utils
import { db } from '../config/database.mjs';
import { CREATE_USER, FIND_USER_BY_EMAIL_OR_USERNAME } from '../config/queries/users.mjs';

// Validation
import { userLoginSchema, userSchema } from '../validators/auth.mjs';
import { compareHashes, createHashFromString, generateJWTToken, validateData } from './common.mjs';


async function addUserToDB(params) {
    try {
        await db.oneOrNone(CREATE_USER, [params.username, params.email, params.password])
    } catch (error) {
        if (error?.code === '23505') {
            throw new Error(error?.detail.includes("username")
                ? `Username - ${params.username} is already taken`
                : `Email - ${params.email} is already registered`)
        }
        throw new Error(error.message)
    }
}

async function findUser(identifier) {
    try {
        const user = await db.oneOrNone(FIND_USER_BY_EMAIL_OR_USERNAME, identifier)
        if (!user) throw new Error("Incorrect account details provided")

        return user
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
}

async function createUser(params) {
    const result = validateData(params, userSchema)

    const payload = {
        ...result.value,
        password: createHashFromString(result.value.password)
    }

    await addUserToDB(payload)

}

async function authenticateUser(params) {
    const result = validateData(params, userLoginSchema)

    const user = await findUser(result.value.identifier)

    const isPasswordCorrect = compareHashes(user.password, result.value.password)

    if (!isPasswordCorrect) {
        throw new Error("Incorrect account details provided")
    }

    return {
        jwt: generateJWTToken({ data: user.username })
    }
}

export { createUser, authenticateUser }