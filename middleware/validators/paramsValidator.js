const Joi = require('joi');
const Joi2=require("./inputValidate")

const id=Joi.object({
    id:Joi2.id.required()
})

module.exports={id};