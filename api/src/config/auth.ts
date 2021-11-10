const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklist = require('../../redis/manage-blacklist')

import { LoginController } from '../controller/LoginController';

function personIsNull (person) {
    if (!person) {
        throw new Error("User not found")
    }
}

async function passwordCompare (password, hashPW) {
    const pwCompare = await bcrypt.compare(password, hashPW);
    if (!pwCompare) {
        throw new Error("Invalid email or password");
    }
}

async function checkBlacklist (token) {
    const tokenInBlacklist = await blacklist.check(token);
    if (tokenInBlacklist) {
        console.log("e");
        throw new jwt.JsonWebTokenError('Invalid token by logout');
    }
}


passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, async (email, password, done) => {
        try {
            const person = await LoginController.getByEmail(email);
            personIsNull(person);
            await passwordCompare(password, person.password);
            done(null, person);
        } catch (error) {
            done(null, false, { message: "Invalid email or password." });
        }
    })
);

passport.use(
    new BearerStrategy( 
        async (token, done) => {
            try {
                await checkBlacklist(token);
                const payload = jwt.verify(token, process.env.jwt_key);
                const person = await LoginController.getById(payload.id);
                done(null, person, { token: token });
            } catch (error) {
                done(null, false, { message: "Token invalid or expired." });
            };
        }
    )
);