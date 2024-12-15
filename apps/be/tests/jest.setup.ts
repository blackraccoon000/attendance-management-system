import {PrismaClient} from "@prisma/client";
import {execSync} from "child_process";

const prisma = new PrismaClient();

beforeAll(async () => {
  // テスト用のデータベースをリセット
  await prisma.$executeRaw`DROP DATABASE IF EXISTS ams_test`;
  await prisma.$executeRaw`CREATE DATABASE ams_test`;

  // Prismaのマイグレーションを適用
  execSync(
    "npx prisma migrate dev --name init --schema=./prisma/schema.prisma",
    {stdio: "inherit"}
  );
});

afterAll(async () => {
  await prisma.$disconnect();
});
