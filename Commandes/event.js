const Discord = require('discord.js');
var prefix = "epsi ";
var TAB = "\t";

module.exports.run = async(client, message, args) => {

    message.delete()

    const sondageSlice = message.content.slice(prefix.length + "event".length).trim();

    if(message.guild.channels.find('name', 'event', 'evenement', 'evenements')){
        message.delete()
    }

    message.delete().catch();
    var embed = new Discord.RichEmbed()
    .setTitle(sondageSlice)
    .setDescription('Je viens : ✅ | Retard possible :🕓 | Pas sur : 🤔 | Je viens pas ❌')
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/606928643050045555/610866185722003486/StarCitizen_2019_08_11_00_30_29_133.jpg')
    message.channel.send(embed)
    .then(function (message){
        message.react("✅")
        message.react("🕓")
        message.react("🤔")
        message.react("❌")
    }).catch(function(){
        
    });
}

module.exports.help = {
    name:"event"
}