const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/posts.js")

app.get("/", (req, res) => {
    res.send("I am root!");
})

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
})