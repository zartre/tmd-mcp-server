/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  transform: {
    "\\.[jt]sx?$": ["ts-jest", { useESM: true }],
  },
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
};

// Adapted from https://stackoverflow.com/questions/73735202/typescript-jest-imports-with-js-extension-cause-error-cannot-find-module
