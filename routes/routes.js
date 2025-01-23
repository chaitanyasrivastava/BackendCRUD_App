const express = require('express');
const router =  express.Router();

router.get('/user', (req, res)=> {
    res.send("all users");
});

router.post('/user', (req, res) => {
    res.send("create user");
});

module.exports = router;