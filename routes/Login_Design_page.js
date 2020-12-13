const express = require('express');
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser');
const router = express();

const users = []

router.use(bodyparser.urlencoded({extended: true}));
router.use(bodyparser.json())

router.post('/', async (req, res) => {
    console.log(req.body);
    try{
        console.log('1111111111');
        users.push({
            id: Date.now().toString(),
            userID: req.body.userID,
            userPassword: req.body.userPassword
        })
        res.redirect('/Login_Design_page')
    }catch{
        res.redirect('/Login_Design_page')
    }
    console.log(users)
})

module.exports = router;
