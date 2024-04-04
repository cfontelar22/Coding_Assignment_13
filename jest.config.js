module.exports = {
  testEnvironment: "jsdom",
  // moduleNameMapper: {
  //   ".(css|less|scss)$": "identity-obj-proxy",
  // },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
