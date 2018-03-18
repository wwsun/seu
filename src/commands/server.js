import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

export default async function server(args) {

  webpackDevServer.addDevServerEntrypoints({}, {});
  const compiler = webpack();
  const server = new webpackDevServer(compiler, {});

  // --port     :   listened port
  // --cwd      :   target directory
  // --plugins  :   plugins
  // --verbose  :   logging message
  const argv = minimist(args);
  const port = argv.port || 3000;
  await (new Promise((resolve, reject) => {
    server.listen(port, 'localhost', () => {
      console.log(`dev server listening on port ${port}`);
    });
  }));
}
