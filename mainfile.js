const VkBot = require('node-vk-bot-api');

const bot = new VkBot(process.env.TOKEN);

bot.command(/^\d{1,} (\+|\-|\*|\/|\%|\^) \d{1,}$/, (ctx) => {
    let arr = ctx.split(" ")

    switch (arr[1]) {
        case "+": {
            ctx.reply(parseFloat(arr[0]) + parseFloat(arr[2]))
            break
        }
        case "-": {
            ctx.reply(parseFloat(arr[0]) - parseFloat(arr[2]))
            break
        }
        case "*": {
            ctx.reply(parseFloat(arr[0]) * parseFloat(arr[2]))
            break
        }
        case "/": {
            ctx.reply(parseFloat(arr[0]) / parseFloat(arr[2]))
            break
        }
        case "**": {
            ctx.reply(parseFloat(arr[0]) ** parseFloat(arr[2]))
            break
        }
        case "%": {
            ctx.reply(parseFloat(arr[0]) % parseFloat(arr[2]))
            break
        }
        default: {
            ctx.reply("Invalid conversion! Try using sample correctly.")
        }

    }
})

bot.startPolling();
