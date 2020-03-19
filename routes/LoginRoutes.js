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

    try {
        let user = await loginService.signUp(email, password);
        res.json({ 'uid': user.uid })
    } catch (error) {
        res.status(403).json({ 'message': error.message });
    }

});

loginRoutes.post("/signIn", async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    try {
        let user = await loginService.signIn(email, password);
        res.json({ 'uid': user.uid })
    } catch (error) {
        res.status(403).json({ 'message': error.message });
    }
})

loginRoutes.post("/recovery", async (req, res) => {
    let email = req.body.email;

    try {
        let reseted = await loginService.recovery(email);
        res.json(reseted)
    } catch (error) {
        res.status(403).json({ 'message': error.message });
    }
})

loginRoutes.post("/inative", async (req, res) => {
    res.json({ 'message': 'Not implemented' })
})

export default loginRoutes;