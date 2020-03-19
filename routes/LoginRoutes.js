import express from 'express';
import LoginService from "../services/LoginService";

let loginService = new LoginService();

let loginRoutes = express.Router();

loginRoutes.get('/', (req, res) => {
    res.json({ 'ok': 'ok' });
});

loginRoutes.post("/signUp", async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    loginService.signUp(email, password)
        .then(user => {
            res.json({ 'uid': user.user.uid })
        }).catch(err => {
            res.status(403).json({ 'message': err.message });
        })
});

loginRoutes.post("/signIn", async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    loginService.signIn(email, password)
        .then(user => {
            res.json({ 'uid': user.user.uid })
        }).catch(err => {
            res.status(403).json({ 'message': err.message });
        })
})

loginRoutes.post("/recovery", async (req, res) => {
    let email = req.body.email;

    loginService.recovery(email)
        .then(() => {
            res.json({ 'reseted': true })
        }).catch(err => {
            res.status(403).json({ 'message': err.message });
        })
})

loginRoutes.post("/inative", async (req, res) => {
    res.json({ 'message': 'Not implemented' })
})

export default loginRoutes;