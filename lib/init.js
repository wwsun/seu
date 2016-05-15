'use strict';

const fs = require('fs');
const path = require('path');
const vfs = require('vinyl-fs');
const through = require('through2');

const boilerplate = path.join(__dirname, '../boilerplate');
const dest = process.cwd();

function* init() {
  vfs.src('**/*', {cwd: boilerplate, cwdbase: true, dot: true})
    .pipe(template(dest))
    .pipe(vfs.dest(dest))
    .on('end', () => {
      fs.renameSync(path.join(dest, 'gitignore'), path.join(dest, '.gitignore'));
      // require('../lib/utils/install-deps'); // install all default dependencies
    })
    .resume();
}

function template(dest) {
  return through.obj(function(file, encode, callback) {
    if (!file.stat.isFile()) {
      return callback();
    }

    console.log('Write %s', simplifyFilename(path.join(dest, path.basename(file.path))));
    this.push(file);
    callback();
  })
}

function simplifyFilename(filename) {
  return filename.replace(process.cwd(), '.');
}

module.exports = init;