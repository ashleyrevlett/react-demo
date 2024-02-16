import { PrismaClient } from '@prisma/client';

// globals.d.ts
declare global {
  var prisma: PrismaClient | undefined;
}