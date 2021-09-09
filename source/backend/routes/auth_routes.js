const router = require('express').Router();
const passport = require('passport');


router.get('/google', 
    passport.authenticate('google', { scope: [ 'email', 'profile' ] })
);


router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('users auth success');
    res.status(308).redirect('/protected');
});

router.get('/google/logout', (req, res) => {
    req.logout(); // logout() will clear req.user and sessions
    req.session.destroy(); // destroys the session
    res.status(204).send('Goodbye!');
});

// das maybe zusammen, für alle failed auth dienste
router.get('/google/failure', (req, res) => {
    res.status(403).send('Failed to authenticate..');
});


module.exports = router;