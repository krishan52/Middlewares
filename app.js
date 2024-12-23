const express = require("express");
const ExpressError = require("./ExpressError");
const app = express();


app.use((req, res, next) => {
  console.log("Hi, I am a Middleware");
  next()
});

app.get("/", (req, res) => {
  res.send("Hi, I am groot");
});

// //Logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })

app.use("/",(req, res, next) => {
    console.log("Hello, I am the middleware for random path");
    next();
});

const checkToken =  (req, res, next) => {
    let { token } = req.query;
    if(token === "give access"){
        next();
    }
   throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api",checkToken, (req, res) => {
    res.send("data");
});

app.get("/random",(req, res) => {
    res.send("Hi, I am random");
});

app.get("/null",(req, res) => {
    klsjd = lasjdf;
    // next();
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Some Error" } = err;
    res.status(status).send(message);
});

app.get("/admin",(req, res) => {
    throw new ExpressError(403, "Access is Forbidden");
})

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});

// // 404 error
// app.use((req, res) => {
//     res.status(404).send("Page not found!");
// });