import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/prisma/client";
import { compare } from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Username",
          type: "text",
          placeholder: "Enter Your Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },
      async authorize(credentials, req) {
        const result: any = await prisma.admin.findUnique({
          where: { name: credentials?.name },
        });

        if (credentials && result) {
          const checkPassword = await compare(
            credentials.password,
            result.password
          );

          if (!checkPassword || result.name !== credentials.name) {
            throw new Error("Username or Password doesn't match");
          }
        }

        if (result) {
          return result;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/adminlogin/",
  },
};

export default NextAuth(authOptions);
