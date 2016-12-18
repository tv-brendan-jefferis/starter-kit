import express from "express";
import open from "open";
import path from "path";
import compression from "compression";

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("/users", (req, res) => {
    res.json([
        {"id": 1, "firstName": "Bobby", "lastName": "Joe-Johnson", "email": "bjj@mail.com"},
        {"id": 2, "firstName": "Tammy", "lastName": "Timms", "email": "tam-tam@mail.com"},
        {"id": 3, "firstName": "Jimdog", "lastName": "Joe-Johnson", "email": "bonerking69@mail.com"},
    ]);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
});
