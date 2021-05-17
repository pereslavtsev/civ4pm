import path from 'path';
import os from 'os';
import glob from 'glob';

const sysRoot =
  os.platform() === 'win32' ? process.cwd().split(path.sep)[0] : ':\\';

glob(
  'Program Files (x86)/**/Firaxis Games',
  {
    cwd: sysRoot,
    strict: false,
    silent: true,
  },
  (er, files) => {
    console.log('err', er);
    console.log(er, files);
  }
);
