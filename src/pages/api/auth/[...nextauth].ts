import { PrismaAdapter } from '@next-auth/prisma-adapter';
import nextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

import { prisma } from '~/libs/prisma';

const EMAIL_SERVER = process.env.EMAIL_SERVER;
const EMAIL_FROM = process.env.EMAIL_FROM;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

if (!EMAIL_SERVER || !EMAIL_FROM || !NEXTAUTH_SECRET) {
  throw new Error('EMAIL_SERVER, EMAIL_FROM, or NEXTAUTH_SECRET not found.');
}

export default nextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM,
    }),
  ],
  secret: NEXTAUTH_SECRET,
});
