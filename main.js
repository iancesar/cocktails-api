import express from "express";
import bodyParser from 'body-parser'
import firebase from 'firebase'
import firebaseConfig from './firebase/firebase-config'
import LoginService from "./services/LoginService";


// console.log(firebaseConfig);

async function start() {

    firebase.initializeApp(firebaseConfig);

    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(bodyParser.json())

    app.get("/", async (req, res) => {
        res.json({ 'status': 'ok' })
    });

    app.post("/", async (req, res) => {

        console.log(req.body)

        let email = req.body.email;
        let password = req.body.password;

        let loginService = new LoginService();

        try {
            let user = await loginService.create(email, password);
            res.json({ 'uid': user.uid })
        } catch (error) {
            res.status(500).json({ 'message': error.message });
        }

    });

    const PORT = process.env.PORT || 5000

    app.listen(PORT);
}

start();
