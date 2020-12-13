let express = require('express');
let router = express();

router.post('/', function(req, res){
    console.log(JSON.stringify(req.body, null, 2));
    res.json({
        success: true,
        user: req.body.name
    })
    console.log(req.body.name);
});

module.exports = router;