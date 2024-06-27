import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';
import RedditProvider from 'next-auth/providers/reddit';

const {

    GOOGLE_AUTH_CLIENT_ID, 
    GOOGLE_AUTH_CLIENT_SECRET, 

    DISCORD_AUTH_CLIENT_ID,
    DISCORD_AUTH_CLIENT_SECRET,

    REDDIT_AUTH_CLIENT_ID,
    REDDIT_AUTH_CLIENT_SECRET,

    NEXTAUTH_SECRET

} = process.env;

export const authOptions = {
  
    providers: [
        GoogleProvider({
            clientId: GOOGLE_AUTH_CLIENT_ID,
            clientSecret: GOOGLE_AUTH_CLIENT_SECRET,
        }),
        DiscordProvider({
            clientId: DISCORD_AUTH_CLIENT_ID,
            clientSecret: DISCORD_AUTH_CLIENT_SECRET,
        }),
        RedditProvider({
            clientId: REDDIT_AUTH_CLIENT_ID,
            clientSecret: REDDIT_AUTH_CLIENT_SECRET,
        }),
    ],

    secret: NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };