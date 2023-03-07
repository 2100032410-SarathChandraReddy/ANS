const { response } = require('express');
const express = require('express');
const router = express.Router()
const registerTemplate=require("../models/RegisterModel")
const bcrypt = require('bcrypt');





router.post('/register',async (req,res)=>{
    const saltpwd = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(req.body.password,saltpwd);
    const Register = new registerTemplate({
        username:req.body.username,
        email:req.body.email,
        password:securepassword
    })
    Register.save()
    .then(data=>{
        res.json(data);
    })
    .catch(e=>{
        res.json(e);
    })
});
module.exports=router;