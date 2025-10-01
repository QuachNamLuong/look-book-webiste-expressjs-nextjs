import type ms from "ms"

type JwtConfig = {
    secret: string,
    expire: ms.StringValue
}

const secret = process.env.JWT_SECRET;
if (!secret) throw new Error("JWT_SECRET not define in .env");

const expire = process.env.JWT_EXPIRE as ms.StringValue;

const jwtConfig = {
    secret,
    expire
};

export default jwtConfig;