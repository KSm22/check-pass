const {Top} = require('../models/models');

const getTop = async (req, res) => {
    const topList = await Top.findAll();

    if (!topList) {
        return res.status(404).send("Candidate not found");
    }

    return res.status(200).json({
        data: topList,
        topLength: topList.length
    });
}

const addTop = async (req, res) => {
    const topList = await Top.findAll();

    if (!topList) {
        return res.status(404).send("Candidate not found");
    }

    if (topList.length >= 3) {
        return res.status(400).send("Топ заполнен")
    }

    const result = await Top.create({name: req.body.name})

    return res.status(200).json(result);
}

module.exports = {
    getTop,
    addTop
}