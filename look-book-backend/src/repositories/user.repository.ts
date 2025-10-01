import prisma from "../lib/prisma.js"

export default class UserRepository {
    static getUserByEmail = (email: string) => {
        return prisma.user.findUnique({where: {email}});
    }

    
}