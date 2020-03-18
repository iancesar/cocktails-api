import express from "express";
import bodyParser from 'body-parser'
import firebase from 'firebase'
import firebaseConfig from './firebase/firebase-config'

//Routes
import loginRoutes from './routes/LoginRoutes'

function start() {

    firebase.initializeApp(firebaseConfig);

    let app = express();

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
