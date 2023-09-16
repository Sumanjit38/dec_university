const express = require('express')
const router = express.Router()
const Users = require('../models/userSchema')
const { body, validationResult } = require('express-validator');

// Teacher Registration
router.post("/teacher", [
    body('tname').isLength({ min: 5}),
    body('universityCode').isLength({ min: 5}),
    //body('regNo').isLength(5),
    //body('rollNo').isLength(5),
    body('phoneNo').isLength(10),
    body('email').isEmail(),
    body('password').isLength({ min: 5})]
    ,async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await Users.create({
                tname : req.body.tname,
                universityCode : req.body.universityCode,
                //regNo : req.body.regNo,
                //rollNo : req.body.rollNo,
                phoneNo : req.body.phoneNo,
                email : req.body.email,
                password : req.body.password
            }).then(res.json({success:true}))
        
        } catch (error) {
            console.log(error)
            res.json({success:false});
    }
})

// Teacher Login
router.post("/teacher-login",[
    body('email').isEmail(),
    body('password').isLength({ min: 5})] 
    ,async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;

        try {
            let userData = await Users.findOne({email});
            if(!userData) {
                return res.status(400).json({ errors: "Try login with correct credentials"})
            }
            if(req.body.password !== userData.password) {
                return res.status(400).json({ errors: "Try login with correct credentials"})
            } 
            return res.json({ success: true})
        
        } catch (error) {
            console.log(error)
            res.json({success:false});
    }
})

// Student Registration
router.post("/student", [
    body('sname').isLength({ min: 5}),
    body('universityCode').isLength({ min: 5}),
    body('regNo').isLength(5),
    body('rollNo').isLength(5),
    body('phoneNo').isLength(10),
    body('email').isEmail(),
    body('password').isLength({ min: 5})]
    ,async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await Users.create({
                sname : req.body.sname,
                universityCode : req.body.universityCode,
                regNo : req.body.regNo,
                rollNo : req.body.rollNo,
                phoneNo : req.body.phoneNo,
                email : req.body.email,
                password : req.body.password
            }).then(res.json({success:true}))
        
        } catch (error) {
            console.log(error)
            res.json({success:false});
    }
})

// Student Login
router.post("/student-login",[
    body('email').isEmail(),
    body('password').isLength({ min: 5})] 
    ,async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;

        try {
            let userData = await Users.findOne({email});
            if(!userData) {
                return res.status(400).json({ errors: "Try login with correct credentials"})
            }
            if(req.body.password !== userData.password) {
                return res.status(400).json({ errors: "Try login with correct credentials"})
            } 
            return res.json({ success: true})
        
        } catch (error) {
            console.log(error)
            res.json({success:false});
    }
})

// Staff Registration
router.post("/staff", [
    body('staffName').isLength({ min: 5}),
    body('universityCode').isLength({ min: 5}),
    body('phoneNo').isLength(10),
    body('email').isEmail(),
    body('password').isLength({ min: 5})]
    ,async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            await Users.create({
                staffName : req.body.staffName,
                universityCode : req.body.universityCode,
                phoneNo : req.body.phoneNo,
                email : req.body.email,
                password : req.body.password
            }).then(res.json({success:true}))
        
        } catch (error) {
            console.log(error)
            res.json({success:false});
    }
})

// Student Login
router.post("/staff-login",[
    body('email').isEmail(),
    body('password').isLength({ min: 5})] 
    ,async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email;

        try {
            let userData = await Users.findOne({email});
            if(!userData) {
                return res.status(400).json({ errors: "Try login with correct credentials"})
            }
            if(req.body.password !== userData.password) {
                return res.status(400).json({ errors: "Try login with correct credentials"})
            } 
            return res.json({ success: true})
        
        } catch (error) {
            console.log(error)
            res.json({success:false});
    }
})

module.exports = router;