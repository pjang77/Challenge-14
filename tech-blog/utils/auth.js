const auth = (req, res, next) => {
    // Check if the user is logged in
    if (!req.session.loggedIn) {
        // If not logged in, redirect to the login page
        res.redirect('/login');
    } else {
    
        next();
    }
};

module.exports = auth;
