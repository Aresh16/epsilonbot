const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const {token, prefix} = require('../config');
const fs = require('fs');
var servers = {};
const Command  = require('discord.js-commando');


module.exports.run = (client, message) => {
    message.delete()

    const membre = message.mentions.members.first() || message.member;
    let args = message.content.split(" ");
    args.shift();
    args.shift();
    const search = args.join("+");
    
    var searchembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage('https://s4.scoopwhoop.com/anj/mhjh/9398023.jpg')
    .setThumbnail(`${membre.user.displayAvatarURL}`)
    .addField("Résultat de ta recherche:", `https://www.google.fr/search?q=${search}`)
    .setFooter("Requested by " + message.author.tag)
    .setTimestamp()
    message.channel.send(searchembed);
};

module.exports.help = {
    name: 'google'
    };