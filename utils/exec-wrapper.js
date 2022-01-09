import { exec } from 'child_process';

export const execute = (script, options) =>
  new Promise((resolve, reject) => {
    exec(`sh "${script}" "${options?.dir}"`, (error, stdout, stderr) => {
      console.log(stdout);
      // console.log(stderr);
      if (error !== null) {
        console.log(`exec error: ${error}`);
        reject();
      }
      resolve();
    });
  });
