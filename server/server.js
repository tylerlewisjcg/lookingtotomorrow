require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    massive = require('massive'),
    userController = require('./controllers/user_controller'),
    answerController = require('./controllers/answer_controller'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0');




    const { SERVER_PORT, 
        SESSION_SECRET,
        DOMAIN,
        CLIENT_ID,
        CLIENT_SECRET,
        CALLBACK_URL
    } = process.env  



const app = express();


app.use(bodyParser.json());


// massive(SESSION_SECRET)
// .then(db => {app.set('db', db)
// })

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'  
}, function(accessToken, refreshToken, extraParams, profile, done){
    done(null, profile)
}))
passport.serializeUser((profile, done) => {
    done(null, profile);
})
passport.deserializeUser((profile, done) => {
    done(null, profile);
})
//// Auth0 Endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000',
    failureRedirect: 'http://localhost:3000'
}))
//// ENDPOINTS


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))