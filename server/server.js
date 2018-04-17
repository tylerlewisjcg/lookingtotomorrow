require("dotenv").config();
const express = require("express"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  massive = require("massive"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0");
const { google } = require("googleapis");
const {
  SERVER_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  CONNECTION_STRING,
  GOOGLE_CALENDAR_API_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connection Established");
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
      scope: "openid profile email"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      console.log(accessToken, refreshToken, extraParams, profile)
      const db = app.get("db");
      db.users_DB.find_user([profile.id]).then(userResult => {
        if (!userResult[0]) {
          db.users_DB
            .create_user([profile.displayName, profile.id, profile.picture])
            .then(createdUser => {
              return done(null, createdUser[0].id);
            })
            .catch(err => console.log(err));
        } else {
          return done(null, userResult[0].id);
        }
      });
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});
passport.deserializeUser((id, done) => {

  app
    .get("db")
    .users_DB.find_session_user([id])
    .then(loggedInUser => {
      done(null, loggedInUser[0]);
    })
    .catch(err => console.log(err));
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
  app
    .get("db")
    .work_history_DB.select_users_work_history([req.session.passport.user])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

app.delete("/api/delete_work_history/:id", (req, res) => {
  app
    .get("db")
    .work_history_DB.delete_work_history([
      req.params.id,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.put("/api/edit_work_history/:id", (req, res) => {
  const {
    company,
    job_title,
    start_date,
    end_date,
    job_responsibilities,
    notable_achievements,
    salary
  } = req.body;
  const { id } = req.params;
  app
    .get("db")
    .work_history_DB.edit_work_history([
      id,
      company,
      job_title,
      start_date,
      end_date,
      job_responsibilities,
      notable_achievements,
      salary,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.post("/api/add_work_history", (req, res) => {
  const {
    company,
    job_title,
    start_date,
    end_date,
    job_responsibilities,
    notable_achievements,
    salary
  } = req.body;
  app
    .get("db")
    .work_history_DB.create_new_work_history([
      company,
      job_title,
      start_date,
      end_date,
      job_responsibilities,
      notable_achievements,
      salary,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

// Education Endpoints

app.get("/api/get_education_history", function(req, res) {
  app
    .get("db")
    .education_DB.select_users_education([req.session.passport.user])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

app.delete("/api/delete_education_history/:id", (req, res) => {
  app
    .get("db")
    .education_DB.delete_education([req.params.id, req.session.passport.user])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.put("/api/edit_education_history/:id", (req, res) => {
  const {
    institution,
    certification_type,
    start_date,
    end_date,
    field_of_study,
    accomplishments
  } = req.body;
  const { id } = req.params;
  app
    .get("db")
    .education_DB.edit_education([
      id,
      institution,
      certification_type,
      start_date,
      end_date,
      field_of_study,
      accomplishments,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.post("/api/add_education_history", (req, res) => {
  const {
    institution,
    certification_type,
    start_date,
    end_date,
    field_of_study,
    accomplishments
  } = req.body;
  app
    .get("db")
    .education_DB.create_new_education([
      institution,
      certification_type,
      start_date,
      end_date,
      field_of_study,
      accomplishments,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

///  Current Skills Endpoints
app.post("/api/add_current_skill", (req, res) => {
  app
    .get("db")
    .current_skills_DB.create_new_current_skill([
      req.body.current_skill,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.get("/api/get_current_skills", function(req, res) {
  app
    .get("db")
    .current_skills_DB.select_users_current_skills([req.session.passport.user])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

app.delete("/api/delete_current_skill/:id", (req, res) => {
  app
    .get("db")
    .current_skills_DB.delete_current_skill([
      req.params.id,
      req.session.passport.user
    ])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

/////// Skills Working On Endpoints

app.post("/api/add_skill", (req, res) => {
  app
    .get("db")
    .skills_DB.create_new_skill([
      req.body.skill_name,
      req.body.start_date,
      req.body.completion_date,
      req.body.due_date,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.get("/api/get_skills", function(req, res) {
  app
    .get("db")
    .skills_DB.select_users_skills([req.session.passport.user])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

app.delete("/api/delete_skill/:id", (req, res) => {
  app
    .get("db")
    .skills_DB.delete_skill([req.params.id, req.session.passport.user])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

app.put("/api/mark_skill_as_complete/:id", (req, res) => {
  app
    .get("db")
    .skills_DB.mark_as_complete([
      req.body.completion_date,
      req.params.id,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

//////// Action Items Endpoints

app.get("/api/get_action_items/:id", function(req, res) {
  app
    .get("db")
    .action_items_db.select_action_items([req.params.id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

app.delete("/api/delete_action_item/:id/:skill_id", (req, res) => {
  app
    .get("db")
    .action_items_db.delete_action_item([req.params.id, req.params.skill_id])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.log(err));
});

app.post("/api/add_action_item", (req, res) => {
  app
    .get("db")
    .action_items_db.create_new_action_item([
      req.body.action_item_description,
      req.body.start_date,
      req.body.completion_date,
      req.body.due_date,
      req.body.skill_id
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.put("/api/mark_action_item_as_complete/:id", (req, res) => {
  app
    .get("db")
    .action_items_db.mark_item_as_complete([
      req.body.completion_date,
      req.params.id,
      req.body.skill_id
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

///// motivations endpoints
app.post("/api/add_motivations", (req, res) => {
  app
    .get("db")
    .motivations_DB.create_new_motivation([
      req.body.why,
      req.body.interests,
      req.body.priorities,
      req.body.favorite,
      req.body.leastFavorite,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.put("/api/edit_motivations", (req, res) => {
  app
    .get("db")
    .motivations_DB.edit_motivation([
      req.body.why,
      req.body.interests,
      req.body.priorities,
      req.body.favorite,
      req.body.leastFavorite,
      req.session.passport.user
    ])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.get("/api/get_motivations", (req, res) => {
  app
    .get("db")
    .motivations_DB.select_users_motivations([req.session.passport.user])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

/// Logout Endpoint
app.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect("http://localhost:3000/#");
});

//// Recently Completed ////
app.get("/api/recently_completed", (req, res) => {
  app
    .get("db")
    .action_items_db.select_action_items_sorted([req.session.passport.user])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});



/////////// Google Calendar/////////
////how do i pass in the object to the 
//// how does the post url know who the primary user is? 
app.post(`https://www.googleapis.com/calendar/v3/calendars/primary/events?conferenceDataVersion=0&maxAttendees=1&sendNotifications=true&supportsAttachments=false&fields=creator%2Cdescription%2Cend%2ChtmlLink%2Csource%2Cstart%2Csummary&key=${GOOGLE_CALENDAR_API_KEY}
`, (req, res) => {
  app
  .get("db")
  ///what does the body need to look like?
  .then(response => res.status(200).send(response))
  .catch(err => console.log(err));
})












app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`));
