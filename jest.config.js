module.exports = {
  //设置识别哪些文件是测试文件（glob形式），与testRegex互斥，不能同时写
  //"**/tests/**/*.ts?(x)",
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  testEnvironment: 'node',
  rootDir: '', //默认值：当前目录，一般是package.json所在的目录。
  transform: {
    '.(ts|tsx)': 'ts-jest',
    '.(js|jsx)': 'babel-jest'
	},
	//配置别名
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/web/components$1',
    '^@utils(.*)$': '<rootDir>/src/web/utils$1'
  },
  //覆盖率
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverage: true,
  coverageDirectory: './docs/jest-coverage',
  coverageReporters: ['json', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'] //测试文件的类型
}
