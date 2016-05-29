import { runCmd } from './utils/cmd';
import { execSync } from 'child_process';
const  atoolBuild = require.resolve('atool-build/bin/atool-build');

function copyHtml() {
  execSync('cp ./*.html _site');
}

function *buildSite() {

  execSync('rm -rf _site _data');
  
  const args = [
    '--devtool=#sourcemap',
    '-o',
    './_site'
  ];
  
  runCmd(atoolBuild, args, (code) => {
    copyHtml();
    console.log('Site build done!')
  });
}

export default buildSite;