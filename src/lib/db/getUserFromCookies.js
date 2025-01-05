import { decode } from "next-auth/jwt";

const {NEXTAUTH_SECRET} = process.env;

export async function getUserFromCookies(cookies) {

    try {
        const token = cookies._parsed.get("__Secure-next-auth.session-token").value;
        const user = await decode({ token, secret: NEXTAUTH_SECRET });
        return user;
    } catch (err) {
        console.error(err);
    }

}
