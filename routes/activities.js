const express = require('express');
const checkAuth = require('../checkAuth');
const router = express.Router();
const models = require('../models');
// const activity = require('../models/activity');

/* GET /api/v1/activities/ */
router.get('/', checkAuth, function(req, res, next) {
  models.Activity.findAll({ where: { UserId: req.user.id }})
    .then(activities => {
      res.json(activities)
    })
});

// DELETE api/v1/activities/6
router.delete('/:id', checkAuth, (req, res) => {
  // try and remove activity with id, as long it is owned by th logged in user
  models.Activity.destroy({ where: { 
    id: req.params.id,
    UserId: req.user.id 
  }})
    .then(numberDeleted => {
      // if there was nothing deleted, then return an error
      if (numberDeleted === 0) {
        res.status(404).json({ error: 'could not find that activity' })
        return
      }

      res.json({ success: 'activity deleted successfully' })
    })
})

// POST /api/v1/activities
router.post('/', checkAuth, (req, res) => {
  // check for required fields
  if (!req.body.name || !req.body.temperature || !req.body.average) {
    res.status(400).json({ error: 'please include all required fields' })
    return
  }

  // create activity in database
  models.Activity.create({
    name: req.body.name,
    temperature: req.body.temperature,
    average: req.body.average,
    UserId: req.user.id
  })
      .then(activity => {
        res.status(201).json(activity)
      })
      .catch(error => {
        res.status(500).json(error)
        console.log(error)
      })
    
  // respond to client with new activity
})

module.exports = router;
