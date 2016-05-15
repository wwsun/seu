const fs = require('fs');
const path = require('path');

const cmd = require('./utils/cmd');
const eslint = require.resolve('eslint/bin/eslint');
const eslintrc = path.join(__dirname, '../.eslintrc');

function* lint() {
  const args = [
    '--config', fs.existsSync(eslintrc) ? eslintrc : path.join(__dirname, '../.eslintrc'),
    'parser', 'babel-eslint',
    '--ext', '.js,.jsx',
    'src'
  ];

  cmd.runCmd(eslint, args, () => {
    console.log('ESLint over with success!');
  })
}

module.exports = lint;