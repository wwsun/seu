import fs from 'fs';
import { join } from 'path';
import { runCmd } from './utils/cmd';

const eslint = require.resolve('eslint/bin/eslint');
const eslintrc = join(__dirname, '../.eslintrc');

function* lint() {
  const args = [
    '--config', fs.existsSync(eslintrc) ? eslintrc : join(__dirname, '../.eslintrc'),
    'parser', 'babel-eslint',
    '--ext', '.js,.jsx',
    'src'
  ];

  runCmd(eslint, args, () => {
    console.log('ESLint over with success!');
  })
}

export default lint;