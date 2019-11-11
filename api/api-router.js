const router = require('express').Router();
var bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post ('/hash', (req,res) => {
  // read pw from body
  const pw = req.body;
  // hash using bcrypt.js
  var hash = bcrypt.hashSync(pw.password, 14);
    // return it to the user in an object that looks like
    res.json({password: credentials.password, hash: hash})
// { password: 'original passsword', hash: 'hashed password' }
})

module.exports = router;
