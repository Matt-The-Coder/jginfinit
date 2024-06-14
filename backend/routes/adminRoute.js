const express = require('express')
const adminRoute = express.Router()
const db = require('../connection/connection')

adminRoute.get('/numtables', async (req, res)=>{
    const tables = await db(`SELECT TABLE_NAME, TABLE_ROWS FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'bncvmljswjf6puzcuhuf';`)
res.json(tables)
})


adminRoute.get('/baic', async (req, res)=> {
    const result = await db("Select * from baic")
    res.json(result)
})
adminRoute.get('/bmw', async (req, res)=> {
    const result = await db("Select * from bmw")
    res.json(result)
})
adminRoute.get('/byd', async (req, res)=> {
    const result = await db("Select * from byd")
    res.json(result)
})
adminRoute.get('/changan', async (req, res)=> {
    const result = await db("Select * from changan")
    res.json(result)
})
adminRoute.get('/changhe', async (req, res)=> {
    const result = await db("Select * from changhe")
    res.json(result)
})
adminRoute.get('/chevrolet', async (req, res)=> {
    const result = await db("Select * from chevrolet")
    res.json(result)
})
adminRoute.get('/foton', async (req, res)=> {
    const result = await db("Select * from foton")
    res.json(result)
})
adminRoute.get('/gac', async (req, res)=> {
    const result = await db("Select * from gac")
    res.json(result)
})
adminRoute.get('/gaz', async (req, res)=> {
    const result = await db("Select * from gaz")
    res.json(result)
})
adminRoute.get('/haima', async (req, res)=> {
    const result = await db("Select * from haima")
    res.json(result)
})
adminRoute.get('/hyundai', async (req, res)=> {
    const result = await db("Select * from hyundai")
    res.json(result)
})
adminRoute.get('/isuzu', async (req, res)=> {
    const result = await db("Select * from isuzu")
    res.json(result)
})
adminRoute.get('/jac', async (req, res)=> {
    const result = await db("Select * from jac")
    res.json(result)
})
adminRoute.get('/jaguar', async (req, res)=> {
    const result = await db("Select * from jaguar")
    res.json(result)
})
adminRoute.get('/jeep', async (req, res)=> {
    const result = await db("Select * from jeep")
    res.json(result)
})
adminRoute.get('/jetour', async (req, res)=> {
    const result = await db("Select * from jetour")
    res.json(result)
})
adminRoute.get('/kaicene', async (req, res)=> {
    const result = await db("Select * from kaicene")
    res.json(result)
})
adminRoute.get('/keyton', async (req, res)=> {
    const result = await db("Select * from keyton")
    res.json(result)
})
adminRoute.get('/kia', async (req, res)=> {
    const result = await db("Select * from kia")
    res.json(result)
})
adminRoute.get('/lexus', async (req, res)=> {
    const result = await db("Select * from lexus")
    res.json(result)
})
adminRoute.get('/mahindra', async (req, res)=> {
    const result = await db("Select * from mahindra")
    res.json(result)
})
adminRoute.get('/maxus', async (req, res)=> {
    const result = await db("Select * from maxus")
    res.json(result)
})
adminRoute.get('/mazda', async (req, res)=> {
    const result = await db("Select * from mazda")
    res.json(result)
})
adminRoute.get('/mercedes', async (req, res)=> {
    const result = await db("Select * from mercedes")
    res.json(result)
})
adminRoute.get('/nissan', async (req, res)=> {
    const result = await db("Select * from nissan")
    res.json(result)
})
adminRoute.get('/ram', async (req, res)=> {
    const result = await db("Select * from ram")
    res.json(result)
})
adminRoute.get('/ssangyong', async (req, res)=> {
    const result = await db("Select * from ssangyong")
    res.json(result)
})
adminRoute.get('/subaru', async (req, res)=> {
    const result = await db("Select * from subaru")
    res.json(result)
})
adminRoute.get('/suzuki', async (req, res)=> {
    const result = await db("Select * from suzuki")
    res.json(result)
})
adminRoute.get('/tata', async (req, res)=> {
    const result = await db("Select * from tata")
    res.json(result)
})
adminRoute.get('/toyota', async (req, res)=> {
    const result = await db("Select * from toyota")
    res.json(result)
})
adminRoute.get('/volkswagen', async (req, res)=> {
    const result = await db("Select * from volkswagen")
    res.json(result)
})
adminRoute.get('/volvo', async (req, res)=> {
    const result = await db("Select * from volvo")
    res.json(result)
})
adminRoute.get('/welmeister', async (req, res)=> {
    const result = await db("Select * from welmeister")
    res.json(result)
})
adminRoute.get('/wuling', async (req, res)=> {
    const result = await db("Select * from wuling")
    res.json(result)
})

module.exports = adminRoute