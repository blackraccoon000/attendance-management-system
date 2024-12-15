import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

beforeAll(async () => {
  // テスト用のデータベースをセットアップする場合はここに記述
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe("User model", () => {
  it("should create a new user", async () => {
    const user = await prisma.user.create({
      data: {
        name: "Test User",
        email: "testuser@example.com",
      },
    });
    expect(user).toHaveProperty("id");
    expect(user.name).toBe("Test User");
    expect(user.email).toBe("testuser@example.com");
  });

  it("should find a user", async () => {
    const user = await prisma.user.findFirst({
      where: {
        email: "testuser@example.com",
      },
    });
    // ちゃんとDBに保存されているか確認
    console.log(user);
  });
});
