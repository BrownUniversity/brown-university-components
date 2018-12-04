module.exports = {
  rootDir: '../',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.js',
  collectCoverageFrom: ['src/components/**/*.js'],
  coverageReporters: ['text-summary', 'lcov'],
  moduleNameMapper: {
    '^[./a-zA-Z0-9$_-]+\\.svg$': '<rootDir>/jest/mocks/MockSVG.js'
  }
};
