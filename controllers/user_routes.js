const router = require('express').Router();
const User = require('../models/User');
const path = require('path');

// Post request route that retrieves the form data (email, password) and creates a new user in the database using our User model
// The route will respond with a message of "User added successfully"
router.post('/register', async (req, res) => {

  // if (!req.body.email || !req.body.password) {
  //   return res.status(400).json({
  //     message: 'User credentials are not valid!!'
  //   });
  // }
  console.log(req.body)

  try {
    await User.create(req.body);

    res.redirect('/');

  } catch (err) {
    console.log(err.errors);
    res.redirect('/register');
  }

});

module.exports = router;