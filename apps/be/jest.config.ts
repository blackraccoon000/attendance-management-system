import type {Config} from "@jest/types";
import {config as dotenvConfig} from "dotenv";
import {resolve} from "path";

// .env.testファイルを読み込む
dotenvConfig({path: resolve(__dirname, ".env.test")});

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["dotenv/config"],
  setupFilesAfterEnv: ["./tests/jest.setup.ts"],
};

export default config;
