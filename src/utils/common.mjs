import Joi from "joi";

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

export { validateData }