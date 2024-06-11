import nextJest from 'next/jest';
import tsconfig from './tsconfig.json';


const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  coverageReporters: ['text', 'json-summary', 'cobertura', 'lcov'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(ora|chalk|cli-cursor))",
  ],
  reporters: ['default', 'jest-junit'],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.jest/',
    '<rootDir>/cypress/',
  ],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,mjs,cjs,cts,mts}'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
  ],
};
export default createJestConfig(customJestConfig);
