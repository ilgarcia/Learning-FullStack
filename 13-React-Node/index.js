const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const videos = [
    "LwMrtHi9xc4",
    "pACSGH54t0o",
    "Ss6M_f8dWUc",
    "-bydbjDeDBE",
    "H5rwG4qChJ4",
];

app.get("/api/videos", (req, res) => {
    res.send(videos);
});

if (process.env.NODE_ENV != "development") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build/index.html"), (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
    });
}

app.listen(3000, () => {
    console.log("Running");
});
