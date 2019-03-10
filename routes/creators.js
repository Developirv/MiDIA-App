
var router = require('express').Router();
var creatorsCtrl = require('../controllers/creators');

// GET 
router.get('/newcreator', creatorsCtrl.index);

// POST /facts

router.post('/midia', isLoggedIn, creatorsCtrl.addFact);

// DELETE /facts/:id
router.delete('/newcreator/:id', creatorsCtrl.delFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;