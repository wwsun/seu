const path = require('path');
const dora = require('dora');
const minimist = require('minimist');

// todo: writing a plugin to process sass
function* server(args) {

  // --port     :   listened port
  // --cwd      :   target directory
  // --plugins  :   plugins
  // --verbose  :   logging message
  const argv = minimist(args);
  dora({
    port: argv.port || '3000',
    cwd: argv.cwd || process.cwd(),
    plugins: argv.plugins ? argv.plugins.split(',') : ['webpack', 'hmr', 'livereload'].map(
      m => path.join(__dirname, './plugins', m)),
    verbose: argv.verbose
  })
}

module.exports = server;