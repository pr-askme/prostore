import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testPrisma() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to the database successfully!");
  } catch (error) {
    console.error("❌ Prisma connection error:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma();
