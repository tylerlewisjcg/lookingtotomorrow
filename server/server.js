require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    massive = require('massive'),
    userController = require('./controllers/user_controller'),
    answerController = require('./controllers/answer_controller');

const app = express();
const port = process.env.PORT || 3232;//// not set under proxy/ main not setup
app.use(bodyParser.json());
app.use(cors());


massive(process.env.SESSION_SECRET)
.then(db => {app.set('db', db)
app.listen(port, () => console.log(`Listening on port ${port}`))
})

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}))


//// ENDPOINTS
