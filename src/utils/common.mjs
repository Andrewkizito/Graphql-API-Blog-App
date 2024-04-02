import Joi from "joi";
import env from "../config/env.mjs";
import jwt from "jsonwebtoken";
import { createHash } from "node:crypto"

/**
 * Validate data against a Joi schema.
 * @param {Object} data - Data to validate.
 * @param {Joi.ObjectSchema<any>} schema - Joi schema to use for validation.
 */

function validateData(data, schema) {
    const result = schema.validate(data);

    if (result.error) {
        throw new Error(result.error.details[0].message)
    }

    return { value: result.value };
}

function createHashFromString(data) {
    return createHash('sha256').update(data).digest().toString('hex')
}

function compareHashes(hash, data) {
    const newHash = createHashFromString(data)
    return hash === newHash
}

function generateJWTToken(payload) {
    return jwt.sign(payload, env.JWT_SECRET, {
        expiresIn: '1d'
    })
}

export { validateData, createHashFromString, compareHashes, generateJWTToken }