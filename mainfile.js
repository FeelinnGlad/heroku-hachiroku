const VkBot = require('node-vk-bot-api');

const bot = new VkBot('175f16b9f6336969610f7b922ea53221ede242b044ffefa27a56fd29d789ded8aa6575d793ea30725c6bb');

bot.command(/^\d{1,} (\+|\-|\*|\/|\%|\^) \d{1,}$/, (ctx) => {

    let arr = ctx.message.text.split(" ")
    
    try {
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
            case "^": {
                ctx.reply(parseFloat(arr[0]) ** parseFloat(arr[2]))
                break
            }
            case "%": {
                ctx.reply(parseFloat(arr[0]) % parseFloat(arr[2]))
                break
            }
        }
        
    } catch (e) {
        console.log(e)
    }

})

console.log('Бот запущен')

bot.startPolling();
