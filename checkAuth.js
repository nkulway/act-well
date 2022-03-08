const jwt = require('jsonwebtoken')

function checkAuth(req, res, next) {
  // the token can be held either in the body of the request, the query to the db or in the header
  const token = req.body.token || req.query.token || req.headers['x-access-token']

  // if there is no token create a 401 status
  if (!token) {
    res.status(401).json({ error: 'please send valid token' })
    return
  }

  // reference my environmental file where I keep my JWT secret as to protect the user's password
req.user = jwt.verify(token, process.env.JWT_SECRET)

  // if there is no user related to the token then throw a 401 status
  if (!req.user) {
    res.status(401).json({ error: 'please send valid token' })
  }
  // the user is authenticated — pass execution along to the next middleware function in the stack
  // otherwise the request will be left hanging
  next()
}

module.exports = checkAuth