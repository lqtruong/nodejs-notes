import Bcrypt from 'bcrypt';
import { IPerson } from '../models/person';
import * as Jwt from 'jsonwebtoken';

export function hashPassword(password: string, saltRounds: number): string {
    if (!password) {
        return null;
    }

    return Bcrypt.hashSync(password, Bcrypt.genSaltSync(saltRounds));
}

export function generateToken(person: IPerson, jwtSecret: string, jwtExpiration: string): string {
    const payload = {
        id: person._id,
        name: person.name,
        email: person.email
    };

    return Jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
}

export function comparePassword(requestPassword: string, hashedPassword: string) {
    return Bcrypt.compareSync(requestPassword, hashedPassword);
}