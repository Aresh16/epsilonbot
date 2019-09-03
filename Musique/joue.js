
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

exports.run = async (client, message, args, ops) => {

    if (!message.member.voiceChannel) return message.channel.send("Connecte toi d'abord à un canal vocal");


if (!args[0]) return message.channel.send("Met un URL après la commande");

let validate = await ytdl.validateURL(args[0]);

if (!validate) return message.channel.send("Je ne comprend pas ton URL");

let info = await ytdl.getInfo(args[0]);

let connection = await message.member.voiceChannel.join();

let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'}));

message.channel.send(`Aller, c'est parti pour écouter ${info.title} ! 😏 `);
};

module.exports.help = {
    name: 'joue'
}