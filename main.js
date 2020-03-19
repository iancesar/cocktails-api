import express from "express";
import bodyParser from 'body-parser'
import firebase from 'firebase'
import firebaseConfig from './firebase/firebase-config'

//Routes
import loginRoutes from './routes/LoginRoutes'

function start() {

    firebase.initializeApp(firebaseConfig);

    let app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json())

    app.get("/", async (req, res) => {
        res.json({ 'status': 'ok' })
    });

    //Login Route
    app.use('/login/', loginRoutes);

    const PORT = process.env.PORT || 5000

    app.listen(PORT);
}

start();
