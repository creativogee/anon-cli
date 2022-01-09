#!/usr/bin/env node

import globals from 'global-modules';
import path from 'path';
import { execute } from '#execute';
import { logger } from '#logger';
import { styles } from '#styles';

const { underline, normal, yellowText } = styles;

(async () => {
  const input = process.argv.slice(2);
  const command = input[0];
  const tag = input[1]?.slice(2);
  const options = input?.slice(2);

  const optionList = ['sequelize', 'git', 'lunitimed'];

  // get anon cli installation path
  const pkg = path.join(globals, 'anon-cli');

  // run the app script if no tag or command is provided
  if (!command && !tag) {
    // resolve path to app.sh
    const app = path.join(`${pkg}`, `/scripts/app.sh`);

    const pkgJson = path.join(`${pkg}`, `/package.json`);
    // execute app.sh
    execute(app, { dir: pkgJson });
  }
  //
  else if (command !== 'options' && command !== 'use' && command !== '--help')
    logger.error('Invalid Command! Please run "anon --help" to see usage');
  //
  else if (command === 'options') {
    logger.list('anon options', optionList);
  }
  //
  else if (command === '--help')
    logger.print(
      '-------Anon CLI------- \n\nUsage: anon use --stack [options] \n\nOptions: sequelize, git \n\nSingle option: \ne.g "anon use --stack sequelize" \n\nMultiple options: \ne.g "anon use --stack sequelize git"',
    );
  //
  else if (!tag || (tag && tag !== 'stack'))
    logger.error('Invalid tag! Please run "anon --help" to see usage');
  //
  else if (command === 'use') {
    try {
      let isOptionValid = false;

      if (options.length == 0)
        logger.error(
          'You have not provided any option. Please run "anon options" to see list of options',
        );

      options.map((option) => {
        if (!optionList.includes(option)) {
          logger.error('Invalid option(s)! Please run "anon options" to see list of options');
        }
        //
        else {
          isOptionValid = true;
          logger.info.inverse(`Unpacking ${option} aliases...`);

          const stack = path.join(`${pkg}`, `/scripts/${option}.sh`);

          execute(stack);
        }
      });

      if (isOptionValid) {
        logger.success('Unpacking complete!');
        logger.warn(
          `Please run${normal} ${underline}"source ~/.bashrc"${normal} ${yellowText}to begin\n              Then run${normal} ${underline}"alias"${normal} ${yellowText}to view your aliases`,
        );
      }
    } catch (e) {
      logger.error(
        `Oops! It is our fault that you see this. \nIf you haven't already, please install globally with ${underline}"npm i -g anon-cli" ${normal} and try again`,
      );
    }
  }
})();
