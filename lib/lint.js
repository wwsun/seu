const fs = require('fs');
const path = require('path');

const process = require('./utils/process');
const eslint = require.resolve('eslint/bin/eslint');
const eslintrc = path.join(__dirname, '../.eslintrc');

function* lint() {
  const args = [
    '--config', fs.existsSync(eslintrc) ? eslintrc : path.join(__dirname, '../.eslintrc'),
    'parser', 'babel-eslint',
    '--ext', '.js,.jsx',
    'src'
  ];

  process.runCmd(eslint, args, () => {
    console.log('eslint over');
  })
}

module.exports = lint;