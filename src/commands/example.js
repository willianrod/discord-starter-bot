// eslint-disable-next-line no-unused-vars
const { Message } = require('discord.js');

/**
 * @param {Message} msg Is the message object received by the bot
 * @param {Array} args Is the arguments passed with the command
 */
const exampleHandler = (msg, args) => {
  msg.reply(`Example ${args.join('|')}`);
};

module.exports = {
  example: exampleHandler,
};
