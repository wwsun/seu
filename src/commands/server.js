import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import asyncCommand from '../utils/async-command';
import getWebpackCommonConfig from '../configs/get-webpack-common-config';

export default asyncCommand({
  command: 'server',
  desc: 'start dev server',
  builder: {},

  async handler(argv) {
    const webpackConfig = getWebpackCommonConfig();
    Object.assign(webpackConfig, {
      mode: 'development',
      devtool: 'inline-source-map',
      devServer: {
        currentBase: path.resolve(process.cwd(), 'dist');
        hot: true,
      },
    });


    webpackDevServer.addDevServerEntrypoints({}, {});
    const compiler = webpack();
    const server = new webpackDevServer(compiler, {});

    // --port     :   listened port
    // --cwd      :   target directory
    // --plugins  :   plugins
    // --verbose  :   logging message
    const port = argv.port || 3000;

    await Promise.resolve(() => {
      server.listen(port, 'localhost', () => {
        console.log(`dev server listening on port ${port}`);
      });
    });
  },
});
