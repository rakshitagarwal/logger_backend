const { findTestTagService, addTextTagService, } = require('../services/tagService');

const addTag = async (req, res, next) => {
    try {
        const response = await addTextTagService(req.body);
        return res.status(response.code).json(response);
    } catch (err) {
        next(err);
    }
};

const findAllTag = async (req, res, next) => {
    try {
        const response = await findTestTagService(req.query);
        return res.status(response.code).json(response);
    } catch (err) {
        next(err);
    }
};

module.exports = { addTag, findAllTag };
