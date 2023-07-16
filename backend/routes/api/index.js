const express = require('express');
const router = express.Router();

const { methods } = require('./methods.js')

const patterErrorMessage = require('../../patterns/errorMessage.js')

router.get('/', (req, res, next) => {
    // const method = req.query.method

    if(method === undefined)return res.json(patterErrorMessage('No method', 'No specific method is specified'))
});

module.exports = router
