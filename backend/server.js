require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT
const origin = process.env.ORIGIN
const path = require('path')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(express.json());

const db = require('./connection/connection')
const testRoute = require('./routes/test');
const adminRoute = require('./routes/adminRoute')
const otpVerification = require("./routes/otp_verification")


var corsOptions = {
  origin: [origin],
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cookieParser())
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true,
  proxy: true, // Required for Heroku & Digital Ocean (regarding X-Forwarded-For)
  name: 'MyKargadaOnly', // This needs to be unique per-host.
  cookie: {
    secure: false, // required for cookies to work on HTTPS
    httpOnly: false,
    sameSite: 'lax'
  }
  
}))
app.set('trust proxy', 1) // trust first proxy
app.use(cors(corsOptions))
app.use('/home', testRoute)
app.use(adminRoute)
app.use(otpVerification)
app.listen(port,  () => {
  console.log(`Server started at port ${port}`)

})

