import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

let env = process.env;

let jwtUtils = {
    encode(payload) {
        let token = jwt.sign(payload, env.JWT_KEY);
        return token;
    }
}

export default jwtUtils;