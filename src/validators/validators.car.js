import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().min(1).max(20).required().messages({
        'string.empty':'Model cant be empty',
        'string.min':'Model must be more then 2 symbol',
        'string.max':'Is to long'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({}),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({})
})

export {
    carValidator
}