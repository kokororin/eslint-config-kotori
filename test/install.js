const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const os = require('os');

// get library path
const lib = path.resolve(__dirname, './');

fs.readdirSync(lib).forEach(function(mod) {
  const modPath = path.join(lib, mod);
  // ensure path has package.json
  if (!fs.existsSync(path.join(modPath, 'package.json'))) return;

  // npm binary based on OS
  const npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

  // install folder
  cp.spawnSync(npmCmd, ['i'], { env: process.env, cwd: modPath });

  // remove package-lock.json
  if (fs.existsSync(path.join(modPath, 'package-lock.json'))) {
    fs.unlinkSync(path.join(modPath, 'package-lock.json'));
  }
});
