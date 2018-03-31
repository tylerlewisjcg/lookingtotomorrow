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
        CALLBACK_URL,
        CONNECTION_STRING
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
}, function(accessToken, refreshToken, extraParams, profile, done) {
    ///// DB CALLS ///////
    const db = app.get("db");
    db.find_user([profile.id]).then(userResult => {
      if (!userResult[0]) {
        db
          .create_user([profile.displayName, profile.id, profile.picture])
          .then(createdUser => {
            return done(null, createdUser[0].id);
          });
      } else {
        return done(null, userResult[0].id);
      }
    });
  }
)
);

passport.serializeUser((id, done) => {
    done(null, profile);
})
passport.deserializeUser((id, done) => {
    app
      .get("db")
      .find_session_user([id])
      .then(loggedInUser => {
        done(null, loggedInUser[0]);
      });
  });
//// Auth0 Endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3232/home',////where do they need to re-direct???
    failureRedirect: 'http://localhost:3000'
}))
//// ENDPOINTS
app.get("/auth/me", function(req, res) {
    if (req.user) {
      res.status(200).send(req.user);
    } else {
      res.status(401).send("You Don't appear to be someone i recognize");
    }
  });
  
  app.get("/auth/logout", (req, res) => {
    req.logOut();
    res.redirect("http://localhost:3232/");
  });

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))