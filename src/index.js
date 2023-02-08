const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { urlencoded } = require('body-parser');
const CityRepository = require("./repository/city-repository");
//const { City } = require("./models/index");

const SetupAndStartServer = async () => {
    // Creating express object
    const app = express();

    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,async () => {
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name: "New Delhi"});
        //await City.create({
        //    name: "Hyderabad"
        //})

    });
}
SetupAndStartServer();