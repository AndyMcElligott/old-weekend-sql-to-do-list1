const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res)=>{
    console.log('in ROUTER GET');
    let queryString = `SELECT * FROM list;`;
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error =>{
        console.log('ERROR GETTING TASKS ON SERVER ------------>', error);
    })
})

//POST
router.post('/', (req, res)=>{
    let thingOne = req.body;
    console.log('Adding new task to list', thingOne);
    //insert into list DB by id
    let queryString = `INSERT INTO "list" ("task") VALUES ($1, 'false');`;
    pool.query(queryString, [thingOne.task]).then(result =>{
        res.sendStatus(201);
    }).catch(error => {
        res.sendStatus(500);
    })
})

module.exports = router;