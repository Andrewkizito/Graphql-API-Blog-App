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
        return { error: result.error.details[0].message };
    } else {
        return { value: result.value };
    }
}

function createHashFromString(data) {
    return createHash('sha256').update(data).digest().toString('hex')
}

export { validateData, createHashFromString }