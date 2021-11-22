module.exports = {
  modulePaths: ["<rootDir>/src/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(s?css)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
