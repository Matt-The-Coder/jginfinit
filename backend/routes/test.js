const express = require('express');
const test = express.Router();
const db = require('../connection/connection');
const testServices = require('../services/test/test');
const { insertTest, deleteTest, getTest } = testServices();

test.get('/test', async (req, res) => {
    const name = 'warren';
    const testData = await insertTest(name);
    res.json(testData);
});


module.exports = test;