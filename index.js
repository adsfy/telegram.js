const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf("6299515615:AAGrWD6Vl1XNXfDkfb7B3ynEvllYUcE1tqE");
bot.telegram.sendMessage(5114747020, "olá, mundo!")



//bot.start((ctx) => ctx.reply('Welcome'));
//bot.help((ctx) => ctx.reply('Send me a sticker'));
//bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
//bot.hears('hi', (ctx) => ctx.reply('Hey there'));
//bot.launch();