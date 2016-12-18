import express from "express";
import open from "open";
import path from "path";
import webpack from "webpack";
import config from "../webpack.config.dev.js";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get("/users", (req, res) => {
   res.json([
       {"id": 1, "firstName": "Bobby", "lastName": "Joe-Johnson", "email": "bjj@mail.com"},
       {"id": 2, "firstName": "Tammy", "lastName": "Timms", "email": "tam-tam@mail.com"},
       {"id": 3, "firstName": "Jimdog", "lastName": "Joe-Johnson", "email": "bonerking69@mail.com"},
   ]);
});

app.get("/", function(req, res) {
   res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});
