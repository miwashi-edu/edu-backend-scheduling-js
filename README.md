# edu-backend-scheduling-js

> Everything on the web isn't request / response. Sometimes you want to do scheduled jobs, like cleaning up or
> calling another webservise to update your data. This is a solution that runs a backend service on a schedule.
## Node Cron
[node-cron](https://www.npmjs.com/package/node-cron)  

## Crontab Guru
[crontab guru](https://crontab.guru/)  

## Instructions

```bash
mkdir edu-backend-schedule
cd edu-backend-schedule
npm init -y
touch server.js
mkdir src
mkdir __test__
touch ./src/schedule.js
npm install express
npm install node-cron
npm install nodemon --save-dev
npm install jest --save-dev
```

## package.json

```json
{
  "name": "edu-backend-scheduling",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node run server.js",
    "dev": "nodemon run server.js",
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/miwashi-edu/edu-backend-scheduling-js.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/miwashi-edu/edu-backend-scheduling-js/issues"
  },
  "homepage": "https://github.com/miwashi-edu/edu-backend-scheduling-js#readme",
  "dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-cron": "^0.0.1-b"
  },
  "devDependencies": {
    "jest": "^28.1.3",
    "jest-runner-groups": "^2.2.0",
    "nodemon": "^2.0.19"
  }
}
```

## server.js

```js
const express = require("express")
const schedule = require('./src/schedule.js')
const app = express()

const PORT = process.env.PORT || 3000
const CRON_SCHEDULE = process.env.CRON_SCHEDULE || "* * * * * *";

schedule.init(CRON_SCHEDULE);

app.listen(3000, console.log(`Server listening on port ${PORT}`))
```

## ./src/schedule.js

```js
const cron = require("node-cron")

exports.init = (schedule) => {
    console.log(`Starting job on ${schedule}`)

    const job = cron.schedule(schedule, () => {
        const time = new Date().toLocaleTimeString()
        console.log(`Job executed at ${time}`);
    });

  job.start();
}
```
