#!/usr/bin/env node
const {exec, spawn} = require('child_process');
const {resolve} = require('path');
const {existsSync} = require('fs');

module.exports = _pm => {
  if (!_pm) {
    try {
      throw new Error('Package manager name is not set in the argument.');
    } catch (e) {
      console.error(e);
      process.exit(1);
    }
  }

  exec('which node', (err, stdout, stderr) => {
    let pm = '';
    if (!err && stdout) {
      pm = resolve(stdout.trim(), '../'.repeat(6)) + '/bin/' + _pm;
    }
    pm = existsSync(pm) ? pm : _pm;
    spawn(pm, process.argv.slice(2), {stdio: 'inherit'})
      .on('close', process.exit);
  });
}
