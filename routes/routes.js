const express = require('express');
const users = require('./users.js');
const index = require('./index.js');

const router = express.Router();

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

router.get('/', index.getIndex);
router.get('/users', users.getUsers);

module.exports = router