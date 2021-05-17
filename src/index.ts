#!/usr/bin/env node
import path from 'path';
import os from 'os';
import fg from 'fast-glob';
import ora from 'ora';
import { Civ4Executable } from './classes/civ4-executable.class';

const root =
  os.platform() === 'win32' ? `${process.cwd().split(path.sep)[0]}\\` : '/';

const execPathPatterns = [
  'Program Files*/**/Civilization4.exe',
  'Program Files*/**/Civ4BeyondSword.exe',
];

const [, , ...args] = process.argv;

const [cmd] = args;
switch (cmd) {
  case 'scan': {
    const stream = fg.stream(execPathPatterns, {
      dot: true,
      cwd: root,
      suppressErrors: true,
    });

    for await (const entry of stream) {
      const s = ora();
      const civ4exec = new Civ4Executable(root + entry);
      const version = await civ4exec.detectVersion();
      const text = [
        'Civilization 4 detected',
        `Path: ${civ4exec.fullPath}`,
        `Version: ${version}`,
      ].join('\n');
      s.info(text);
    }
    break;
  }
}
