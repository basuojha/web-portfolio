import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lucide-react/)"],
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^assets/(.*)$": "<rootDir>/__mocks__/mockFile.js",
    "^constants/(.*)$": "<rootDir>/src/constants/$1",
    "^contexts/(.*)$": "<rootDir>/src/contexts/$1",
    "^.+\\.svg$": "<rootDir>/__mocks__/mockFile.js",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".jsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

export default config;
