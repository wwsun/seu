#!/usr/bin/env node

import yargs from 'yargs';
import pkg from '../package.json';
import build from './commands/build';
import server from './commands/server';

yargs
  .command(build)
  // .command(server)
  .usage(`seu ${pkg.version}`)
  .help()
  .alias('h', 'help')
  .demandCommand()
  .strict()
  .argv;
