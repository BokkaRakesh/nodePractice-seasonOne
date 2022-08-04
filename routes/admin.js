const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utl/path')


router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/admin')
});
router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views','add-product.html'))
});


module.exports = router;