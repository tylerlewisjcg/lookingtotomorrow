require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  massive = require("massive"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0");

const {
  SERVER_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  CONNECTION_STRING
} = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log('Database Connection Established');
})
.catch(err => console.log(err));


app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "openid profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {

      const db = app.get("db");
      db.users_DB.find_user([profile.id]).then(userResult => {
        if (!userResult[0]) {
          db.users_DB.create_user([profile.displayName, profile.id, profile.picture])
            .then(createdUser => {
              return done(null, createdUser[0].id);
            });
        } else {
          return done(null, userResult[0].id);
        }
      })
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});
passport.deserializeUser((id, done) => {
  app.get("db").users_DB.find_session_user([id])
    .then(loggedInUser => {
      done(null, loggedInUser[0]);
    });
});
//// Auth0 Endpoints
app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#",
    failureRedirect: "http://localhost:3000/#"
  })
);
app.get("/auth/me", function(req, res) {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    res.status(200).send(req.user);
  }
});

// work_history endpoints

app.get("/api/get_work_history", function(req, res) {
  
app.get('db').work_history_DB.select_users_work_history([req.session.passport.user])
.then(response => {res.status(200).send(response)
  })
.catch(err => console.log(err))
});


app.delete( '/api/delete_work_history/:id', ( req, res ) => {
  console.log(req.params.id)
  app.get('db').work_history_DB.delete_work_history(req.params.id)
      .then( response => res.status(200).send(response))
     /////this is returning the deleted item, not the object of remaining items//// don't know how to fix that
      .catch(err => console.log(err))
} )





app.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect("http://localhost:3000/#");
});

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
