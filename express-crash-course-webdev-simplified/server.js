const express = require('express');
const app = express();

//? in-buit express middleware to render static files, takes path as an input
// Using this we can access all static files inside specified location
// app.use(express.static("public"));
// to access request body
app.use(express.urlencoded({extended: true}))
// posting JSON to server
app.use(express.json()) // Calling api

app.set('view engine', 'ejs'); // set ejs as view engine

//? this will be used for all requests defined below this line
// app.use(logger);

//? we can pass multiple middleware functions as paramter before actual callback for the request
app.get('/', logger, logger, (req, res, next)=>{
    // console.log('Hello');
    // res.sendStatus(500);
    // res.status(500).send('Error');
    // res.status(500).json({message: 'Error'});
    res.json({message: 'Response with default status: Success'});
    
    //? send with default status of 200
    // res.send('Hi there');

    //? send file, path of the file
    // res.download('server.js');

    //? render view file, express has view engine setup. ex: ejs, pug 
    // res.render('index', {text123: 'World'}); // locals = {text: 'World'}

})

// app.get('/users', (req,res)=>{
//     res.send('User List');
// })

// app.get('/users/new', (req, res)=>{
//     res.send('User New Form');
// })


const userRouter = require('./routes/users');

app.use('/users', userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

// app.listen(3001);

module.exports = app;