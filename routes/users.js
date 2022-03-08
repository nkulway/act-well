const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router();
const models = require('../models')

/* POST /api/v1/users/register */
router.post('/register', function(req, res, next) {
    // if there are missing fields
    if (!req.body.user_name || !req.body.email || !req.body.password) {
      // send an error back
      res.status(400).json({ error: 'please include all required fields' })
      return
    }

    //check if email is in use
    models.User.findAll({ where: { email: req.body.email } })
      .then((users) => {
        //if it is then send error
        if(users.length > 0) {
          res.status(400).json({ error: 'email is in use' })
          return
        }
        //if not then create new user
        //hash password
        bcrypt.hash(req.body.password, 10)
          .then(hash => {
            //store in db
            models.User.create({
              user_name: req.body.user_name,
              email: req.body.email,
              password: hash
            })
            .then(user => {
              //send back new user
              res.status(201).json(user)
            })
        })
    })
});

/* POST /api/v1/users/login */
router.post('/login', (req, res) => {
  // check for required fields
   // if there are missing fields
   if (!req.body.user_name || !req.body.email || !req.body.password) {
    // send an error back
    res.status(400).json({ error: 'please include all required fields' })
    return
  }
  // check for user with email
  models.User.findOne({ where: { email: req.body.email } })
    .then(user => {
      // if no user, send error
      if(!user) {
        res.status(404).json({ error: 'could not find account with that email' })
        return
      }

      // check/compare password against hash in db
      bcrypt.compare(req.body.password, user.password)
        .then(match => {

          // if no match send error
          if (!match) {
            res.status(400).json({ error: 'password incorrect' })
            return
          }
          // log the user in
          const token = jwt.sign(user.get({ plain: true }), process.env.JWT_SECRET)

          // send success response
          res.json({ success: 'logged in', token })
        })
    })
})

module.exports = router;
