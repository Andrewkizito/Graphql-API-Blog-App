// DB Utils
import { db } from '../config/database.mjs';
import { CREATE_USER } from '../config/queries/users.mjs';

// Validation
import { userSchema } from '../validators/auth.mjs';
import { createHashFromString, validateData } from './common.mjs';


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

async function createUser(params) {
    // Validate params
    const result = validateData(params, userSchema)

    if (result.error) {
        throw new Error(result.error)
    } else if (result.value) {
        const payload = {
            ...result.value,
            password: createHashFromString(result.value.password)
        }

        await addUserToDB(payload)
    }

}

export { createUser }