const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

exports.run = (client, message, args, ops) => {

        if (!message.member.voiceChannel) return message.channel.send("connecte toi à un cannal voal avant !");
       
        if (!message.guild.me.voiceChannel) return message.channel.send('Je suis connecté à aucun cannal vocal');

        if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("déso, tu n'es connecté à aucun cannal vocal");

        message.guild.me.voiceChannel.leave();

        message.channel.send("ok, je quitte le cannal");
    

}

module.exports.help = {
    name: 'stop'
}