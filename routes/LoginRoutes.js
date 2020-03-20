import express from 'express';
import jwtUtils from '../utils/jwt-utils'
import LoginService from "../services/LoginService";
import crypto from 'crypto'

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
            let token = jwtUtils.encode({ uid: user.user.uid });
            res.json({ 'token': token })
        }).catch(err => {
            res.status(403).json({ 'message': err.message });
        })
});

loginRoutes.post("/signIn", async (req, res) => {

    let email = req.body.email;
    let password = req.body.password;

    loginService.signIn(email, password)
        .then(user => {
            let token = jwtUtils.encode({ uid: user.user.uid });
            res.json({ 'token': token })
        }).catch(err => {
            res.status(403).json({ 'message': err.message });
        })
})


loginRoutes.post("/resetPassword", async (req, res) => {
    let email = req.body.email;

    loginService.recovery(email)
        .then(() => {
            res.json({ 'reseted': true })
        }).catch(err => {
            res.status(403).json({ 'message': err.message });
        })
})

loginRoutes.post("/generateToken", async (req, res) => {
    let uid = req.body.uid;
    const DADOS_CRIPTOGRAFAR = {
        algoritmo : "aes256",
        segredo : "chaves",
        tipo : "hex"
    };
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    console.log(cipher.final(DADOS_CRIPTOGRAFAR.tipo));

    res.json({ 'message': 'Not implemented' })
})

export default loginRoutes;