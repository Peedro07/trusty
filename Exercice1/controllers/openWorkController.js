const axios = require('axios')
const openWorkModel = require('../models/openWork')

exports.getAllOpenWork = (req, res, next) => {
    const company = req.params.company
    const url = `https://api.lever.co/v0/postings/${company}?mode=json`

    const openWork = async () => {
        return await axios.get(url)
    }
    openWork()
        .then(response => response.data)
        .then(response => {
            const models = [];
            response.map((d) => {
                const model = new openWorkModel({
                    lever_id: d.id,
                    name: d.text,
                    department: d.categories.department,
                    jobUrl: d.hostedUrl,
                    contract: d.categories.commitment,
                    team: d.categories.team,
                    location: d.categories.location,
                    publishedAt: d.createdAt
                });
                models.push(model)
            })
            res.status(200).json({
                "companyName": company,
                "endpointLever": url,
                "nbrOpenJob": response.length,
                "openJobs": models
            })
        })
        .catch((e) => {
            res.status(400).json({
                "message": company + " is undifined",
            })
        })

};
