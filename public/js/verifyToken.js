var jwt = require('jsonwebtoken');
var config = require('../../config/config.js');

function verifyToken(req, res, next) {
    console.log("in verify");
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
      console.log(token);
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.loginsId = decoded.id;
    next();
  });
}
module.exports = verifyToken;