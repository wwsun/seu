#!/usr/bin/env node

'use strict';

require('babel-polyfill');

import fs from 'fs';
import path from 'path';
import co from 'co';
import chalk from 'chalk';
import program from 'commander';

const pkg = require('../package.json');

program
  .version(pkg.version)
  .usage('[command] [option]');

program
  .command('*')
  .description('Build codes')
  .action(cmd => {
    const commands = ['init', 'build', 'site', 'server', 'lint'];
    const filePath = path.join(__dirname, `../lib/${cmd}.js`);

    co(function* () {
      let args = process.argv.slice(3);
      yield require(filePath)(args);
    }).catch(err => {
      console.error(chalk.red(err.stack));
      process.exit(1);
    });

  });

program
  .on('--help', () => {
    console.log('');
    console.log('    init       Generate project structure');
    console.log('    build      Codes build');
    console.log('    site       Build the static site');
    console.log('    server     Development server');
    console.log('    lint       Lint your codes');
  });

program
  .parse(process.argv);