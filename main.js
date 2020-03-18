import express from "express";
import bodyParser from 'body-parser'

console.log('ENV!!!!!', process.env.NOME);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => res.json({ 'env': process.env.NOME }));

//oi

const PORT = process.env.PORT || 5000

app.listen(PORT);
