import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)": "<rootDir>/$1",
    "@/(.*)": "<rootDir>/$1",
    "@/public/(.*)": "<rootDir>/public/$1",
    "^@/public/(.*)": "<rootDir>/public/$1",
    "@/components/(.*)": "<rootDir>/components/$1",
    "^@/components/(.*)": "<rootDir>/components/$1",
  },
  rootDir: "./src",
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
}

export default config;
