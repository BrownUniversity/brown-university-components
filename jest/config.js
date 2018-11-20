module.exports = {
  rootDir: '../',
  setupTestFrameworkScriptFile: '<rootDir>/jest/setup.js',
  collectCoverageFrom: ['src/components/**/*.js'],
  coverageReporters: ['text-summary', 'lcov']
};
