const express = require("express")
const schedule = require('./src/schedule.js')
const app = express()

const PORT = process.env.PORT || 3000
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || "* * * * * *";

schedule.init(CRON_SCHEDULE);

app.listen(3000, console.log(`Server listening on port ${PORT}`))