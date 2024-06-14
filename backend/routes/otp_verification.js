const express = require('express');
const otpVerification = express.Router();
const ls = require('local-storage')

otpVerification.post('/otpData', async (req, res) => {
    const {
        name,
        model,
        variant,
        year,
        transmission,
        phone,
        ConfirmationResultImpl } = req.body
        console.log(ConfirmationResultImpl)
    req.session.name = req.body
    ls.set("verification", ConfirmationResultImpl);
});


otpVerification.get('/otpVerification', (req, res) => {
    const verification = ls.get("verification")
    res.json(verification)
});



otpVerification.get('/otpData1', async (req, res) => {


    req.cookies.name = "warren"
    res.json(req.cookies.name)
});


otpVerification.get('/otpVerification1', async (req, res) => {
    console.log(req.cookies)
    res.json(req.cookies.name)
});




otpVerification.get('/otpVerification2', async (req, res) => {
    req.session.destroy(function (err) {
        res.send("destoyed")
    })
});


module.exports = otpVerification;