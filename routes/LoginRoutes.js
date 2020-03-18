import express from 'express';
import LoginService from "../services/LoginService";

let loginRoutes = express.Router();

loginRoutes.get('/', (req, res) => {
    res.json({ 'ok': 'ok' });
});

loginRoutes.post("/signUp", async (req, res) => {

    console.log(req.body)

    let email = req.body.email;
    let password = req.body.password;

    let loginService = new LoginService();

    try {
        let user = await loginService.create(email, password);
        res.json({ 'uid': user.uid })
    } catch (error) {
        res.status(403).json({ 'message': error.message });
    }

});

loginRoutes.post("/signIn", async (req, res) => {
    res.json({ 'message': 'Not implemented' })
})

loginRoutes.post("/signOut", async (req, res) => {
    res.json({ 'message': 'Not implemented' })
})

loginRoutes.post("/recovery", async (req, res) => {
    res.json({ 'message': 'Not implemented' })
})

loginRoutes.post("/inative", async (req, res) => {
    res.json({ 'message': 'Not implemented' })
})

export default loginRoutes;