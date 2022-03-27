const cron = require('node-cron')
const axios = require('axios')
const companies = ["Swile", "Backmarket", "Ledger"]


async function appCron() {
    cron.schedule('0 11,15 * * 1-5', async function (fireDate) {
        await message();
    }, {timezone: 'Europe/Paris'})
}

async function message() {
    companies.map((c) => {
        axios.get(`http://localhost:3500/getOpenJobsInfos/${c}`)

    })
}
