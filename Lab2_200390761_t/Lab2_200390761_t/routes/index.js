'use strict';
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res) {
    console.log(req.query);
    //localhost:3000?method=add
    console.log(req.query.method)
    //creating the function
    function Lab2(x, y, method) {

        if (method == "add") {
            console.log(x + y)
        }
        else if (method == "subtract") {
            console.log(x - y)
        }
        else if (method == "multiply") {
            console.log(x * y)
        }
        else if (method == "divide") {
            console.log(x / y)
        }
    }
    //calling it
    Lab2(parseInt(req.query.x), parseInt(req.query.y), req.query.method)

    res.render('index', { title: 'Express' });
});

module.exports = router;
