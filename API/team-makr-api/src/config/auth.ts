const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
import { LoginController } from '../controller/LoginController';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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
            done(error);
        }
    })
);

passport.use(
    new BearerStrategy( 
        async (token, done) => {
            try {
                const payload = jwt.verify(token, process.env.jwt_key);
                const person = await LoginController.getById(payload.id);
                done(null, person, { token: token });
            } catch (error) {
                done(error);
            }

    } )
)