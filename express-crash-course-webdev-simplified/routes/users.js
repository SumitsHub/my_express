const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render('users/new', {firstName: ''});
});

router.post("/", (req, res) => {
  const isValid = true;
  if(isValid) {
    users.push({firstName: req.body.firstName});
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    res.render('user/new', {firstName: req.body.firstName});
  }
  console.log(req.body);
  res.send("Create User");
});

// router.get("/:id", (req, res) => {
//   const reqId = req.params.id;
//   res.send(`Get user with id ${reqId}`);
// });

// router.put("/:id", (req, res) => {
//   const reqId = req.params.id;
//   res.send(`Update user with id ${reqId}`);
// });

// router.delete("/:id", (req, res) => {
//   const reqId = req.params.id;
//   res.send(`Delete user with id ${reqId}`);
// });

//? doing with router.route()

router
  .route("/:id")
  .get((req, res) => {
    const reqId = req.params.id;
    console.log(req.user)
    res.send(`Get user with id ${reqId}`);
  })
  .put((req, res) => {
    const reqId = req.params.id;
    res.send(`Update user with id ${reqId}`);
  })
  .delete((req, res) => {
    const reqId = req.params.id;
    res.send(`Delete user with id ${reqId}`);
  }).post((req, res) => {
    const reqId = req.params.id;
    console.log('req', req.body);
    users.push({name: req.body.name});
    res.status(200).json({message: 'Added successfully'});
  });

  //! this can be used as middleware, middleware: code that runs between starting of the request and ending of the request
  // to perform task with request paramter before processing actual request
//   router.param("id", (req, res, next, id)=>{
//       console.log(id);
//       next(); //? without next this will call infinitly, next actually calls methods like: get put delete
//   })

const users = [{name: 'Abhishek'},{ name: 'Kyle'}]

router.param("id", (req, res, next, id)=>{
    req.user = users[id];
    next(); //? without next this will call infinitly, next actually calls methods like: get put delete
})

module.exports = router;
