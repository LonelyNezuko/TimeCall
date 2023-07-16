const express = require('express');
const router = express.Router();

const path = require('path')
const app = express()

const patterErrorMessage = require('../../patterns/errorMessage.js')

router.get('/:id', (req, res, next) => {
    const id = req.params.id
});

module.exports = router
