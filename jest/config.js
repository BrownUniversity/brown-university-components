module.exports = {
  rootDir: "../",
  testEnvironment: "jsdom",
  prettierPath: null,
  moduleDirectories: ["node_modules", "jest/utils"],
  setupFilesAfterEnv: ["<rootDir>/jest/setup.js"],
  collectCoverageFrom: ["src/components/**/*.js"],
  coverageReporters: ["text-summary", "lcov"],
  moduleNameMapper: {
    "^[./a-zA-Z0-9$_-]+\\.svg$": "<rootDir>/jest/mocks/MockSVG.js",
  },
};
