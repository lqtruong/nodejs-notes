const Db = require('./../db');
const Bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const Configs = require('../config.json');
const Boom = require('@hapi/boom');

const pwSaltRounds = 12;
const getUserByUsername = async (username) => {
    console.log('find user with username=' + username);
    return new Promise((resolve, reject) => {
        Db.get('select * from users where username=?', [username], (err, results) => {
            if (err) {
                reject(err)
            }
            resolve(results);
        })
    });
};

const insertUser = async (req, res) => {
    let user = req.payload;
    return new Promise((resolve, reject) => {
        resolve(Db.run('insert into users(firstName,lastName,username,password,email,token) values (?,?,?,?,?,?)', [
            user.firstName,
            user.lastName,
            user.username,
            Bcrypt.hashSync(user.password, Bcrypt.genSaltSync(pwSaltRounds)),
            user.email,
            user.token
        ], (err) => {
            if (err) {
                console.log(err);
                reject(err);
            }
        }));
    });
};

const login = async (req, res) => {
    let username = req.payload.username;
    let password = req.payload.password;
    let user = await getUserByUsername(username);
    if (!user) {
        console.log('user ' + username + ' not found.');
        throw Boom.notFound('user ' + username + ' not found.');
    }
    // verify password
    if (!Bcrypt.compareSync(password, user.password)) {
        console.log('invalid user or password');
        throw Boom.unauthorized('invalid user or password');
    }

    const token = Jwt.sign(
        {
            id: user.id,
            email: user.email,
            fullName: `${user.firstName} ${user.lastName}`
        },
        Configs.jwt.secret,
        { expiresIn: '7d' });

    return new Promise((resolve, reject) => {
        resolve({
            email: user.email,
            token: token
        });
    });
};

module.exports = {
    getUserByUsername,
    insertUser,
    login
}