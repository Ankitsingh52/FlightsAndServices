const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { urlencoded } = require('body-parser');
const ApiRoutes = require('./routes/index');
//const { City } = require("./models/index");

const SetupAndStartServer = async () => {
    // Creating express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    //console.log(ApiRoutes);
    app.use('/api',ApiRoutes);
    app.listen(PORT,async () => {
        console.log(`Server started at ${PORT}`);
        
    });
}
SetupAndStartServer();