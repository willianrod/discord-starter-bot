## Discord Starter Bot

This is an starter project to yout begin building your own Discord bot.

## Setting up

To start build you own Discord bot, you'll need to set some things up. You can find instructions here on [Discord.JS Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) and then [adding your bot to your Discord Channel](https://discordjs.guide/preparations/adding-your-bot-to-servers.html).

## Setting up your envirement

To be able to connect to your bot using the api, you will need to copy the file `.env.default` and rename it to `.env`. Once you did this, all that remains to do is put your bot credentials on the envirement variables.

The information that you will need to put there, is the Bot Token, that you can get from the Bot tab in your application page.

![Bot details page](https://i.imgur.com/kJjCdEg.png)

Once you get these key, you can place it on the corresponding `.env` variable, and now you can just specify what is the prefix that you want to your bot. Ex: `!`. This will be used to know when the user wants to invoke your bot or not.

## Develping more commands

To develop more comands, you may want to separate it on multiple files base on what those commands do (Ex: You might want to separate all commands related to Twitch separated in a single file just to make your code organized)

### Steps to develop more commands

- Create a new `js` file inside the `commands` directory with the name that you want
- You will need to import this new file that you created at `src/commands/index.js`, so your bot knows the existence of the commands that you created.

Once you did this, you are almost ready to use these command in your Bot. You'll just need to create a function that will handle the command processing.

```js
/**
 * @param {Message} msg Is the message object received by the bot
 * @param {Array} args Is the arguments passed with the command
 */
const exampleHandler = (msg, args) => {
  msg.reply(`Example ${args.join("|")}`);
};
```

Then you'll have to export the function from the file just like this
```js
module.exports = {
  example: exampleHandler,
}
```
Note that `example` will be named as a command for your Bot like `!example`, and `exampleHandler` will be called to resolve this command when invoked by a user.

Done, now you only will need to run `yarn` to install the dependences and `yarn start:dev` to start a developer instance that will be restarted when files in your project changes, or just run `yarn start` if you are not interested on restarting the bot on every file change.

## Where can I find the documentation of Discord.JS?
When developing new features to your bot, you might face some issues and you'll have to look at some documentation to find a light. In this project I used a JS library called `discord.js` and you will find their documentation [here](https://discordjs.guide/)
