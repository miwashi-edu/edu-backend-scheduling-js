const cron = require("node-cron")


exports.init = (schedule) => {
    if(!cron.validate(schedule)){
        console.log("Cron setting not valid, job not started!")
        return
    }

    console.log(`Starting cron job to run at ${schedule}`)
    const job = cron.schedule(schedule, () => {
        const today = new Date();
        const time = today.getHour() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(`kör backend arbete ${time}`)
    })
    job.start()
}
