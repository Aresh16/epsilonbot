const Discord = require('discord.js');
var prefix = "epsi ";

module.exports.run = async(client, message, args) => {

    message.delete()

    const sondageSlice = message.content.slice(prefix.length + "sondage".length).trim();

    if(message.guild.channels.find('name', 'sondage')){
        message.delete()
    }

    message.delete().catch();
    var embed = new Discord.RichEmbed()
    .setTitle(sondageSlice)
    .setColor("RANDOM")
    .setFooter(`Epsibot | Sondage par ${message.author.tag}`)
    .setTimestamp()
    message.channel.send(embed)
    .then(function (message){
        message.react("❌")
        message.react("✅")
    }).catch(function(){
        
    });
}

module.exports.help = {
    name:"sondage"
}