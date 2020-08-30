require('./setup');

const Discord = require('discord.js');

const commands = require('./commands');

const { DISCORD_BOT_KEY, DISCORD_BOT_PREFIX } = process.env;

/**
 * @param {Message} msg Is the message object received by the bot
 * @param {Array} args Is the arguments passed with the command
 */
const defaultHandler = (msg, args) => {
  msg.reply('Ops! Command not found');
};

const client = new Discord.Client();

client.on('ready', async () => {
  // eslint-disable-next-line no-console
  console.log(`Logged in as ${client.user.tag}!`);

  // Things to do when your bot is connected to the channel goes here
});

client.on('message', async msg => {
  const [command, ...args] = msg.content.split(' ');

  if (!command.startsWith(DISCORD_BOT_PREFIX)) return;

  const parsedCommand = command.replace(DISCORD_BOT_PREFIX, '');
  const currentCommand = commands[parsedCommand];

  if (currentCommand) {
    await currentCommand(msg, args);
  } else {
    defaultHandler(msg, args);
  }
});

client.login(DISCORD_BOT_KEY);
