const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET
router.get("/", (req, res) => {
  console.log("in ROUTER GET");
  let queryString = `SELECT * FROM list;`;
  pool
    .query(queryString)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log("ERROR GETTING TASKS ON SERVER ------------>", error);
    });
});

//POST
router.post("/", (req, res) => {
  let thingOne = req.body;
  console.log("Adding new task to list", thingOne);
  //insert into list DB by id
  let queryString = `INSERT INTO "list" ("task") VALUES ($1, 'false');`;
  pool
    .query(queryString, [thingOne.task])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      res.sendStatus(500);
    });
});

//PUT
router.put("/:id", (req, res) => {
  const list = req.body;
  const id = [req.params.id];
  const queryText = `UPDATE "list" SET "status" = 'true' WHERE "id"= $1`;
  pool
    .query(queryText, id)
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log("error in PUT ROUTER", error);
      res.sendStatus(500);
    });
});

//DELETE
router.delete("/:id", (req, res) => {
  console.log("in ROUTER DELETE, deleting id:", id);
  let id = req.params.id;
  let queryString = 'DELETE FROM "tasks" WHERE "id"=$1;';
  pool
    .query(queryString, [id])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log("ERROR DELETING TASK ------------>", error);
      res.sendStatus(500);
    });
});

module.exports = router;
