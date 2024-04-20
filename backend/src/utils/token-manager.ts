import  Jwt from "jsonwebtoken";

export const createToken =  (id: string , email:string , expiresIn:string) => {
    const payload = {id, email};
    const token = Jwt.sign(payload , process.env.JWT_SECERET , {
        expiresIn,
    });
    return token;
}