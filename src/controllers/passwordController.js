const {Password} = require('../models/models');

const checkPassword = async (req, res) => {
    const pass = await Password.findOne({where: {password: req.body.password}});

    if (!pass) {
        return res.status(400).send("Wrong password");
    }

    try {
        await Password.destroy({where: {id: pass.id}})
    } catch (e) {
        return res.status(400).send("Password removal error")
    }

    return res.status(200).send("Password correct");
}

module.exports = {
    checkPassword
}