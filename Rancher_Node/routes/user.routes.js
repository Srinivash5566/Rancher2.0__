const express = require('express');
const { createUser, updateUser, getUser } = require('../controllers/user.controller');

const router = express.Router();

router.post('/saveUser', createUser);
router.put('/updateUser/:id', updateUser);
router.get('/getUser/:id', getUser);

module.exports = router;
