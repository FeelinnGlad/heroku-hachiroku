const VkBot = require('node-vk-bot-api');

const bot = new VkBot(process.env.TOKEN);

bot.command('/start', (ctx) => {
    ctx.reply('Heya!! Enter your conversion.');
});

// bot.command(/^\d{1,} (\+|\-|\*|\/|\%|\^) \d{1,}$/, ctx => {
//     ctx.reply
    // var str = null

// })

// var floor = Math.floor;
// var x = floor("1000.01");

bot.startPolling();
