const express = require('express');
const router =  express.Router();

router.get('/user', (req, res)=> {
    res.send("all users");
});

router.push('/api/user', (req, res)=> {
    res.send("push");
});

module.exports = router;