const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=>{
    console.log('in ROUTER GET');
    let queryString = `SELECT * FROM list;`;
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error =>{
        console.log('ERROR GETTING TASKS ON SERVER ------------>', error);
    })
})

module.exports = router;