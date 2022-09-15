const express = require('express');
const mailController= require('./mailController');
const mailRouter = express.Router();

mailRouter.post("/", mailController.makeMail);

module.exports = mailRouter