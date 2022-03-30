const express = require('express');
const sequelize = require('./db');
const cors = require('cors')
const models = require('./models/models')
const {checkPassword} = require("./controllers/passwordController");
const path = require("path");
const {getTop, addTop} = require("./controllers/topController");
const {auth} = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());
app.use(cors())
app.use('/', auth)
app.use(express.static(path.join(__dirname + `/public`)));
app.post('/pass', checkPassword);
app.get('/top', getTop);
app.post('/top', addTop);
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '/public')});
});

const start = async () => {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(5000, () => console.log("server started"))
}

start();