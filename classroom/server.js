const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts = require("./routes/posts.js")
const session = require("express-session")
const flash = require("connect-flash")
const cookieParser = require("cookie-parser")
const path = require("path");

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

const sessionOptions = {
    secret : "mysupersecretstring",
    resave : false,  //kuch bi change aaye toh bhi krna save
    saveUninitialized : true //
}

app.use(session(sessionOptions));
app.use(cookieParser());
app.use(flash());



app.use("/register", (req, res) => {
    let {name="anonymous"} = req.query;
    req.session.name = name;
    // console.log(req.session.name);
    req.flash("success", "Registered successfully!");
    
     res.send(name);
})

// app.use("/hello", (req, res)=>{
//     console.log(req.flash("success"));
//     res.render("page.ejs", {name : req.session.name, msg : req.flash("success")})
//     res.send(`hello! ${req.session.name}`);
// })

app.get("/hello", (req, res)=>{
    res.render("page.ejs", {name : req.session.name, msg : req.flash("success")});
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