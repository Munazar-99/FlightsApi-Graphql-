import type { Config } from '@jest/types';

const config:Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  transform: {
    '^.+\\.ts?$': ['ts-jest', {//the content you'd placed at "global"
      babel: true,
      tsConfig: 'tsconfig.json',
    }]
  },
  testRegex: '/__tests__/.*.test.ts$',
  verbose: true,
};

export default config;