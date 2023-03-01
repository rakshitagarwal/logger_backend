const Joi2 = require("./inputValidate")
const Joi = require('joi');

const errLogPagination = Joi.object({
    skip: Joi2.skip,
    limit: Joi2.limit,
    search: Joi2.search.allow(null,""),
    projectId: Joi2.projectId.required()
})
const projectPagination = Joi.object({
    skip: Joi2.skip,
    limit: Joi2.limit,
    search: Joi2.search.allow(null,""),
})

module.exports = {
    errLogPagination,
    projectPagination
}