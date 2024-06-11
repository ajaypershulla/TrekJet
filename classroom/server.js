const express = require ("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path")

app.set("views engine", " ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(cookieParser("secretcode"));
// app.use(session({secret:"mysupersecretstring",resave:false , saveUninitialized: true}));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) =>{
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
})

// app.get("/getsigendcookies", (req,res) => {
//     res.cookie("Greet", "Namaste" ,{signed:true});
//    res.send("signed cookie send");
// })

// app.get("/verify",(req,res) => {
//     console.log(req.signedCookies);
//     res.send("verified");
// })

// app.get("/getcookies", (req,res) => {
//     res.cookie("Greet", "Namaste");
//     res.cookie("madeIn", "India");
//     res.send("sent you some cookies")
// })

// app.get("/greet", (req,res)=>{
//    let {name = "Anonymonous"}=req.cookies;
//     res.send(`Hi , ${name}`);
// })

// app.get("/", (req,res)=>{
//     console.dir(req.cookies)
//     res.send(" hey i am root")
// })





// app.use("/users", users);
// app.use("/posts", posts);




app.get("/register", (req,res)=>{
    let {name = "anonymous"} = req.query;
    req.session.name = name;
  
    if(name === "anonymous"){
        req.flash("error", "user registration failed");
    }else{
        req.flash("success", "user register successfully");
    }
   
    res.redirect("/hello");
})


app.get("/hello", (req,res)=>{
   
    // res.render("page.ejs", {name: req.session.name, msg:req.flash("success")});
    res.render("page.ejs", {name: req.session.name});

})


// app.get("/request", (req,res) =>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
 
//     res.send(`you send the response ${req.session.count} times`)
// })

// app.get("/test", (req,res) =>{
//     res.send("test successfull");
// })


app.listen(8080, ()=>{
    console.log("app is listinig to the port ")
});