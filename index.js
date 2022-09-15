require("dotenv").config();

const express = require('express');

const mailRouter = require('./mail-routes')

const port = process.env.PORT || 5001;
const cors = require("cors");

const app = express();

app.use(cors({}))

app.use((req, res, next) => {
    express.json({ limit: "10mb", extended: true })(req, res, next);
})
app.use('/mail', mailRouter)

console.log("Listening on port: " + port);
app.listen(port)