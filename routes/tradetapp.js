const express = require('express');
const { authRefreshMiddleware, getHubs, getProjects, getProjectContents, getItemVersions } = require('../services/aps.js');
const {getFinancials, getQualifications} = require("../services/aps");

let router = express.Router();
router.use('/api/tradetapp', authRefreshMiddleware);

router.get('/api/tradetapp/financials', async function (req, res, next) {
    try {
        const financials = await getFinancials(req.internalOAuthToken);
        res.json(financials);
    } catch (err) {
        next(err);
    }
});

router.get('/api/tradetapp/qualifications', async function (req, res, next) {
    try {
        const qualifications = await getQualifications(req.internalOAuthToken);
        res.json(qualifications);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
