const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/posts.js")
const session = require("express-session")
const flash = require('connect-flash')
//const cookieParser = require("cookie-parser")
const path = require("path");
const { log } = require("console");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

const sessionOptions = {
    secret : "mysupersecretstring",
    resave : false,
    saveUninitialized : true
}

app.use(session(sessionOptions));
app.use(flash());


app.use("/register", (req, res) => {
    let {name="anonymous"} = req.query;
    req.session.name = name;
    if(name === "anonymous"){
        req.flash("error","some error occured!")
    }else{
        req.flash("success","user registered successfully!")
    }
    res.redirect("/hello");
})

// app.use("/hello", (req, res)=>{
//     console.log(req.flash("success"));
//     res.render("page.ejs", {name : req.session.name, msg : req.flash("success")})
//     res.send(`hello! ${req.session.name}`);
// })

app.get("/hello", (req, res)=>{
    req.locals.successMsg = req.flash("success");
    req.locals.errorMsg = req.flash("error");
    res.render("page.ejs", {name : req.session.name});  
})

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`No of requests is ${req.session.count} time`);
// })


// app.get("/test", (req, res)=> {
//     res.send("test successful!");
// })

// app.get("/test/:id", (req,res)=> {
//     res.send("test2 successful!");
// })

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in","India", {signed : true});
//     res.cookie("name", "Hemant");
//     res.send("Signed cookie send");
// })

// app.get("/verify", (req, res)=> {
//     console.log(req.cookies);
//     console.log(req.signedCookies);
// })

// app.get("/getcookies", (req,res) => {
//     res.cookie("greet", "hellooooooo");
//     res.cookie("name", "Hemant");
//     res.send("sent you some cookies");
// })

// app.get("/greet", (req,res) =>{
//     let {name = "traveller"} = req.cookies;
//     res.send(`hello, ${name}!`);
// })

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("I am root!");
// })

// app.use("/users", users);
// app.use("/posts", posts);

app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
})