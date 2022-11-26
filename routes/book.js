const express = require('express');
const app = express();
const path = require('path');
const router=express.Router();


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../data/books.js'));
    console.log(__dirname);
    console.log(__filename);
  });


  module.exports= router