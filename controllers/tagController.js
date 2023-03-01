const { findTestTagService, addTextTagService, } = require('../services/tagService');

const addTag = async (req, res, next) => {
    try {
        const testTag = await addTextTagService(req.body);
        return res.status(testTag.code).json(testTag);
    } catch (err) {
        next(err);
    }
};

const findAllTag = async (req, res, next) => {
    try {
        const testTag = await findTestTagService(req.query);
        return res.status(testTag.code).json(testTag);
    } catch (err) {
        next(err);
    }
};

module.exports = { addTag, findAllTag };
