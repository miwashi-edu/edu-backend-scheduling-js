const cron = require("node-cron")

exports.init = (schedule) => {
    console.log(`Starting job on ${schedule}`)

    const job = cron.schedule(schedule, () => {
        const time = new Date().toLocaleTimeString()
        console.log(`Job executed at ${time}`);
    });

  job.start();
}