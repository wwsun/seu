import webpack from 'webpack';
import asyncCommand from '../utils/async-command';
import getWebpackCommonConfig from '../configs/get-webpack-common-config';

export default asyncCommand({
  command: 'build',
  desc: 'build source codes',
  builder: {},

  async handler(argv) {
    console.log(argv);

    // webpack build
    const webpackConfig = getWebpackCommonConfig();
    webpackConfig.mode = 'production';

    await new Promise((resolve, reject) => {
      webpack(webpackConfig, (err, stats) => {
        if (err || stats.hasErrors()) {
          reject(err);
        } else {
          resolve(stats);
        }
      });
    });
  },
});
