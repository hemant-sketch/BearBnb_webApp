const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("GET for posts");
})

router.get("/:id", (req, res) => {
    res.send("GET for show posts id");
})

router.post("/", (req, res)=> {
    res.send("POST for postss")
})

router.delete("/:id", (req, res) => {
    res.send("DELETE for postss id")
}) 

module.exports = router;