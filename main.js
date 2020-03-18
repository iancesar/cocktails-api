import express from "express";
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => res.json({ ok: true }));

app.listen(8080);
