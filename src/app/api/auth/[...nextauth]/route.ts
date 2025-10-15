import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authConfig = {

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const email = typeof credentials?.email === 'string' ? credentials.email : '';
        const password = typeof credentials?.password === 'string' ? credentials.password : '';
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) return null;
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return null;
        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? '';
        token.email = user.email ?? '';
        token.name = user.name ?? '';
        token.role = user.role ?? 'USER';
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = typeof token.id === 'string' ? token.id : '';
        session.user.email = typeof token.email === 'string' ? token.email : '';
        session.user.name = typeof token.name === 'string' ? token.name : '';
        session.user.role = typeof token.role === 'string' ? token.role : 'USER';
      }
      return session;
    }
  },
  adapter: PrismaAdapter(prisma) as any,
  session: { strategy: "jwt" },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
} satisfies NextAuthConfig;

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig);