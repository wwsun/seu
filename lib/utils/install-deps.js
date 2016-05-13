function runCmd(cmd, args, callback) {
  args = args || [];
  const runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: 'inherit'
  });
  runner.on('close', code => {
    if (callback) {
      callback(code);
    }
  });
}

runCmd('npm', ['install'], () => {
  console.log('npm install end');
});