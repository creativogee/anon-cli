import { styles } from '#styles';
const { redBg, greenBg, blueBg, yellowBg, underline, normal, yellowText, blueText } = styles;

export const logger = {
  /**
   *
   * @param {string} msg message
   * @returns
   */
  print: (msg) => console.log(msg, '\n'),
  /**
   *
   * @param {string} msg message
   */
  error: (msg) => console.log(redBg, 'Error:', normal, msg, '\n'),
  /**
   *
   * @param {string} msg message
   */
  success: (msg) => console.log(greenBg, 'Success:', normal, msg, '\n'),
  /**
   *
   * @param {string} heading
   * @param {string[]} items items to be listed
   */
  list: (heading, items) => {
    console.log(underline, heading, '');
    items.forEach((item) => console.log(normal, '+', item));
  },
  /**
   *
   * @param {string} msg message
   */
  warn: (msg) => console.log(yellowBg, 'Attention:', normal, yellowText, msg, normal, '\n'),
  /**
   *
   * @param {string} msg message
   */
  info: (() => {
    const proxy = (msg) => console.log(blueBg, msg, normal, '\n');
    const inverse = (msg) => proxy(msg);
    const main = (msg) => console.log(blueText, msg, normal, '\n');
    main.inverse = inverse;
    main.proxy = proxy;
    return main;
  })(),
};
