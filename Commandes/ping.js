const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.delete()

    let début = Date.now();
    message.channel.send('Ping')
        .then((m) => m.edit(`Mon pig est de : **${Date.now() - début}**ms 👌 `));
};

module.exports.help = {
    name: 'ping'
};
