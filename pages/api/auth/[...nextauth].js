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
          //change
          credentials.username !== "admin" ||
          credentials.password !== "00000"
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
