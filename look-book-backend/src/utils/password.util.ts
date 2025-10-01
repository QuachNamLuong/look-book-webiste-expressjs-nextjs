import { compare, hash } from "bcrypt";

const SALT = 100

export const hashPassword = async (plainPassword: string) => {
    return await hash(plainPassword, SALT);
};

export const checkPassword = async (plainPassword: string, passwordHash: string) => {
    try {
        const match = await compare(plainPassword, passwordHash);
        return match;
    } catch (error) {
        console.error('Error checking password:', error);
        return false;
    }
};