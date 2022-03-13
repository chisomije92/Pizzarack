import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (
          credentials.username !== `${process.env.ADMIN_USERNAME}` ||
          credentials.password !== `${process.env.ADMIN_PASSWORD}`
        ) {
          throw new Error("Email/Password is invalid!");
        }
        return {
          username: credentials.username,
        };
      },
    }),
  ],
  secret: `${process.env.SECRET}`,
});
