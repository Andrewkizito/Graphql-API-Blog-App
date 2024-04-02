import joi from 'joi'

const userSchema = joi.object({
    username: joi.string().alphanum().min(3).max(20).required(),
    email: joi.string().email().max(64).required(),
    password: joi.string().min(6).max(20).required()
})

const userLoginSchema = joi.object({
    identifier: joi.string().min(3).max(64).required(),
    password: joi.string().min(6).max(20).required()
})

export { userSchema, userLoginSchema }