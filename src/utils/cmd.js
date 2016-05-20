import cp from 'child_process';

function runCmd(cmd, args, callback) {
  args = args || [];
  const runner = cp.spawn(cmd, args, {
    // keep color
    stdio: 'inherit'
  });
  runner.on('close', code => {
    if (callback) {
      callback(code);
    }
  });
}

export { runCmd };