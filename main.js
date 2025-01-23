// import 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');


const app = express();
const PORT = process.env.PORT || 4000;
// dataconnections
mongoose
  .connect(process.env.DBI_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB Error:", err));

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret : `my secreate key`,
    saveUninitialized : true,
    resave : false,
}));
app.use((req, res ,next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});
app.set("view engine", "ejs");

//use router middle ware
app.use(require('./routes/routes'));




 app.listen(PORT,()=> {
    console.log(`server started on local host : ${PORT}`);

 });