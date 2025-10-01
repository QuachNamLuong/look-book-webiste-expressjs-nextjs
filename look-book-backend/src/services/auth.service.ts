import UserRepository from "../repositories/user.repository.js";

export default class AuthService {
    static login = (email: string, password: String) => {
        const user = UserRepository.getUserByEmail(email);
        if (!user) throw new Error(`User with email ${email} not exits`);
        
        
        
    };

    static register = () => {
        
    };
}